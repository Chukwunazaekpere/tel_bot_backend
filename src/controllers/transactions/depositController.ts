import { Request, Response } from 'express';
import bitcoin from 'bitcoinjs-lib';
import axios from 'axios';
import bitcore from 'bitcore-lib';

import models from '../../models/index';
const Deposit = models.Deposits;


interface UTXOType {
    satoshis: any,
    script: any,
    address: any,
    txId: any,
    outputIndex: any
}


const depositController = async (req: Request, res: Response): Promise<Response> => {
    const {amountToSend, sourceAddress} = req.body;

    const newDeposit = new Deposit({
        // ...data
    })
    
    const BITCOIN = bitcoin.networks.bitcoin;
    const keyPair = bitcoin.ECPair.makeRandom({ network: BITCOIN });

    const { address } = bitcoin.payments.p2pkh({
        pubkey: keyPair.publicKey,
        network: BITCOIN,
    });
    let pk = keyPair.toWIF()
    console.log(address,pk);

// L5R28uPdDfn9PFkyEpp86uYKhQ2SoTYxjVBQRx77LbCPGeuSVK3K   the created bitcoin address key


//this will now be under the route of the withdrawer

//  @receiverAddress - Address of the person you want to send bitcoin to
//   @amountToSend - This is the amount of bitcoin you want to send to someone from your wallet. This amount will be deducted from your wallet and sent to this address.

//please anywhere you see BTCTEST or change it to BITCOIN(network)
//anywhere you see sochain change it to blockchain
// you will make a const that stores the "recieverAddress"

    const recieverAddress = process.env.RECEIVER_ADDRESS as string;
    const privateKey = process.env.PRIVATE_KEY as string;
    const blockhain_network = "BITCOIN";
    
    const satoshiToSend = amountToSend * 100000000;
    let fee = 0;
    let inputCount = 0;
    let outputCount = 2;
    const utxos = await axios.get(
      `https://blockchain.com/api/v2/get_tx_unspent/${blockchain_network}/${sourceAddress}`
    );
    const transaction = new bitcore.Transaction();
    let totalAmountAvailable = 0;
    
    let inputs = [] as any;
    let utxo = {} as UTXOType;
    utxos.data.data.txs.forEach(async (element: any) => {
      utxo.satoshis = Math.floor(Number(element.value) * 100000000);
      utxo.script = element.script_hex;
      utxo.address = utxos.data.data.address;
      utxo.txId = element.txid;
      utxo.outputIndex = element.output_no;
      totalAmountAvailable += utxo.satoshis;
      inputCount += 1;
      inputs.push(utxo);
    });
  
    let transactionSize = inputCount * 146 + outputCount * 34 + 10 - inputCount;
    // Check if we have enough funds to cover the transaction and the fees assuming we want to pay 20 satoshis per byte
  
    fee = transactionSize * 20
    if (totalAmountAvailable - satoshiToSend - fee  < 0) {
      throw new Error("Balance is too low for this transaction");
    }

    //Set transaction input
    transaction.from(inputs);
  
    // set the recieving address and the amount to send
    transaction.to(recieverAddress, satoshiToSend);
  
    // Set change address - Address to receive the left over funds after transfer
    transaction.change(sourceAddress);
  
    //manually set transaction fees: 20 satoshis per byte
    transaction.fee(fee * 20);
  
    // Sign transaction with your private key
    transaction.sign(privateKey);
  
    // serialize Transactions
    const serializedTransaction = transaction.serialize();
    console.log(serializedTransaction);
    // Send transaction
    const result = await axios({
      method: "POST",
      url: `https://blockchain.com/api/v2/send_tx/${blockhain_network}`,
      data: {
        tx_hex: serializedTX,
      },
    });
    return result.data.data;
  }
  console.log(sendBitcoin);

  // note this console log will render to the notification

    try {
        const modelResponse = await newDeposit.increaseBalance();
        if(typeof(modelResponse) === "string"){
            const message = "Unregistered user making a deposit.";
            throw message;
        }

        const saveDeposit = await newDeposit.save();
        return res.status(201).json({
            message: 'Deposit was successful',
            status: "Success",
            data: saveDeposit
        })
    } catch (error) {
        return res.status(400).json({
            message: `Deposit was unsuccessful.`,
            status: "Error",
            data: `${error}`
        })
    }
}

export default depositController;