"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bitcore_lib_1 = __importDefault(require("bitcore-lib"));
const bitcore_explorers_1 = __importDefault(require("bitcore-explorers"));
const createTransaction = (transaction) => {
    return new Promise((resolve, reject) => {
        const unit = bitcore_lib_1.default.Unit;
        const insight = new bitcore_explorers_1.default.Insight();
        const minerFee = unit.fromMilis(0.128).toSatoshis(); //cost of transaction in satoshis (minerfee)
        const transactionAmount = unit.fromMilis(transaction.amount).toSatoshis(); //convert mBTC to Satoshis using bitcore unit
        if (!bitcoinaddress.validate(transaction.fromaddress)) {
            return reject('Origin address checksum failed');
        }
        if (!bitcoinaddress.validate(transaction.toaddress)) {
            return reject('Recipient address checksum failed');
        }
        insight.getUnspentUtxos(transaction.fromaddress, function (error, utxos) {
            if (error) {
                //any other error
                return reject(error);
            }
            else {
                if (utxos.length == 0) {
                    //if no transactions have happened, there is no balance on the address.
                    return reject("You don't have enough Satoshis to cover the miner fee.");
                }
                //get balance
                let balance = unit.fromSatoshis(0).toSatoshis();
                for (var i = 0; i < utxos.length; i++) {
                    balance += unit.fromSatoshis(parseInt(utxos[i]['satoshis'])).toSatoshis();
                }
                //check whether the balance of the address covers the miner fee
                if ((balance - transactionAmount - minerFee) > 0) {
                    //create a new transaction
                    try {
                        let bitcore_transaction = new bitcore_lib_1.default.Transaction()
                            .from(utxos)
                            .to(transaction.toaddress, transactionAmount)
                            .fee(minerFee)
                            .change(transaction.fromaddress)
                            .sign(transaction.privatekey);
                        //handle serialization errors
                        if (bitcore_transaction.getSerializationError()) {
                            let error = bitcore_transaction.getSerializationError().message;
                            switch (error) {
                                case 'Some inputs have not been fully signed':
                                    return reject('Please check your private key');
                                    break;
                                default:
                                    return reject(error);
                            }
                        }
                        // broadcast the transaction to the blockchain
                        insight.broadcast(bitcore_transaction, function (error, body) {
                            if (error) {
                                reject('Error in broadcast: ' + error);
                            }
                            else {
                                resolve({
                                    transactionId: body
                                });
                            }
                        });
                    }
                    catch (error) {
                        return reject(error.message);
                    }
                }
                else {
                    return reject("You don't have enough Satoshis to cover the miner fee.");
                }
            }
        });
    });
};
