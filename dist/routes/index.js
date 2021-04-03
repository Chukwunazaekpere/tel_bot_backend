"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appRouter = express_1.Router();
//========================= imports =====================
const transactions_1 = __importDefault(require("./transactions"));
const authentication_1 = __importDefault(require("./authentication"));
//=======================================================
appRouter.use('/auth', authentication_1.default);
appRouter.use('/transactions', transactions_1.default);
exports.default = appRouter;
