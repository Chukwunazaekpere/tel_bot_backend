"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccountModel_1 = __importDefault(require("./trannsactions/AccountModel"));
const WithdrawalModel_1 = __importDefault(require("./trannsactions/WithdrawalModel"));
const DepositModel_1 = __importDefault(require("./trannsactions/DepositModel"));
const InvestModel_1 = __importDefault(require("./trannsactions/InvestModel"));
//=============== auth model =====================
const Users_1 = __importDefault(require("./authentication/Users"));
const models = {
    Account: AccountModel_1.default,
    Withdrawals: WithdrawalModel_1.default,
    Deposits: DepositModel_1.default,
    Users: Users_1.default,
    Investments: InvestModel_1.default
};
exports.default = models;
