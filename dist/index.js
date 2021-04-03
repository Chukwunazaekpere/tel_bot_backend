"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const server = express_1.default();
//======================= imports ======================
const dbConnect_1 = __importDefault(require("./config/dbConnect"));
const routes_1 = __importDefault(require("./routes"));
//======================================================
// settings
//middlewares
server.use(express_1.default.json());
// routes
server.use('/api', routes_1.default);
const PORT = process.env.PORT || 5000;
const main = () => {
    server.listen(PORT, () => {
        dbConnect_1.default();
        console.log("\tServer running at port: ", PORT);
    });
};
main();
