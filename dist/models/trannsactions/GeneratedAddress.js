"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const generateAddressSchema = new mongoose_1.default.Schema({
    privateKey: {
        type: String,
        required: true
    },
    publicKey: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    wif: {
        type: String,
        required: true
    },
}, { timestamps: true });
const GenerateAddress = mongoose_1.default.model("AddressGeneration", generateAddressSchema);
exports.default = GenerateAddress;
