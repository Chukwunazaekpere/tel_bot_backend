"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const axios_1 = __importDefault(require("axios"));
const GeneratedAddress_1 = __importDefault(require("../../models/trannsactions/GeneratedAddress"));
const AddressGenerationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // generate address
        const data = yield axios_1.default.post(`${process.env.BASE_URL}/v1/bc/btc/${process.env.NETWORK}/address`, { data: {} }, {
            // data: {},
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": process.env.CRYPTO_APIS
            }
        });
        let { address, privateKey, publicKey, wif } = data.data.payload;
        const generatedAddressDetails = yield GeneratedAddress_1.default.create({
            privateKey,
            publicKey,
            address,
            wif
        });
        console.log("\n\t Saved TX...", data.data.payload);
        console.log("\n\t Saved TX...", generatedAddressDetails);
        return res.status(201).send({
            message: 'Please copy this address and click on the link to make deposit..',
            address: address,
            link: "https://localhost/api/transactions/deposit"
        });
    }
    catch (error) {
        return res.status(500).send({
            error
        });
    }
});
exports.default = AddressGenerationController;
