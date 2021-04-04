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
const AccountModel_1 = __importDefault(require("./AccountModel"));
const Users_1 = __importDefault(require("../authentication/Users"));
const investmentSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    amount: {
        type: Number,
        required: true
    },
    transactionId: {
        type: Number,
        required: false
    },
}, { timestamps: true, updatedAt: false });
investmentSchema.methods.increaseInvestment = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const username = this.username;
        try {
            const user = yield Users_1.default.findOne({ username });
            if (user === null) {
                const message = "Unregistered user attempting to invest.";
                throw message;
            }
            const userAccount = yield AccountModel_1.default.findOne({ user: user._id });
            console.log("userAccount: ", userAccount);
            const investedAmount = this.amount;
            const previousBalance = Number(userAccount === null || userAccount === void 0 ? void 0 : userAccount.balance);
            if (previousBalance === 0) {
                throw "Insufficient funds.";
            }
            const newBalance = previousBalance - investedAmount;
            const previousInvestment = Number(userAccount === null || userAccount === void 0 ? void 0 : userAccount.investment);
            const newInvestment = previousInvestment + investedAmount;
            userAccount['balance'] = newBalance;
            userAccount['investment'] = newInvestment;
            yield userAccount.save();
            return true;
        }
        catch (error) {
            return error;
        }
    });
};
const Investments = mongoose_1.default.model('Investments', investmentSchema);
exports.default = Investments;
