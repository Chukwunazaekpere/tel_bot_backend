"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
const main = () => {
    server_1.default.listen(PORT, () => {
        dbConnect_1.default();
        console.log("\tServer running at port: ", PORT);
    });
};
main();
