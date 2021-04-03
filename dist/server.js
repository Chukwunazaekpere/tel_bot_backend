"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server = express_1.default();
if (process.env.NODE_ENV == 'development')
    require('dotenv').config({ silent: true });
//======================= imports ======================
const routes_1 = __importDefault(require("./routes"));
//======================================================
// settings
//middlewares
server.use(express_1.default.json());
// routes
server.use('/api', routes_1.default);
exports.default = server;
