"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const transactionRouter = express_1.Router();
transactionRouter.post("/deposit", controllers_1.default.depositController);
transactionRouter.get("/generate-address", controllers_1.default.addressGenerator);
transactionRouter.get("/balance", controllers_1.default.balanceController);
transactionRouter.post("/withdrawal", controllers_1.default.withdrawalController);
transactionRouter.post("/invest", controllers_1.default.reinvestController);
exports.default = transactionRouter;
