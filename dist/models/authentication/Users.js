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
const AccountModel_1 = __importDefault(require("../trannsactions/AccountModel"));
const userSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    walletAddress: {
        type: String,
        required: true,
        unique: true,
    },
}, { timestamps: true, updateddAt: false });
userSchema.methods.createAccount = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const newAccount = new AccountModel_1.default({
            user: `${this.id}`,
            balance: 0,
            investment: 0,
            availableWithdrawal: 0
        });
        const createdAccount = yield newAccount.save();
        return createdAccount;
    });
};
const Users = mongoose_1.default.model("Users", userSchema);
exports.default = Users;
