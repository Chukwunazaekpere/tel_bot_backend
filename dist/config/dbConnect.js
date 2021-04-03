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
const mongoose_1 = __importDefault(require("mongoose"));
// import dotenv from 'dotenv';
// dotenv.config({ path: "./src/config/config.env"});
// if (process.env.NODE_ENV == 'development'){
//     require('dotenv').config({ silent: true });
//     console.log("Env: ", process.env.NODE_ENV);
// }
console.log("Path: ", process.env);
const connectDb = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('\n\t Initiating DB connection...');
    try {
        yield mongoose_1.default.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('\n\t DB connected successfully...');
    }
    catch (error) {
        console.error(error.message);
    }
    ;
});
exports.default = connectDb;
