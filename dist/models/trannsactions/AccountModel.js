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
;
const accountSchema = new mongoose_1.default.Schema({
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Users"
    },
    balance: {
        type: Number,
        required: true
    },
    investment: {
        type: Number,
        required: true
    },
    availableWithdrawal: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
}, { timestamps: true, createdAt: false });
accountSchema.methods.setBonus = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const bonus = 1.25;
        const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        //=============== registration details ==================
        const createdAt = new Date(this.createdAt);
        const registeredMonth = createdAt.getMonth();
        const registeredDay = createdAt.getDate();
        //=======================================================
        //================ presentDay details ===================
        const presentDate = new Date();
        const presentMonth = presentDate.getMonth();
        //========================================================
        const monthDifference = presentMonth + 1 - registeredMonth + 1;
        let startDayDiff = 0;
        let presentDayDiff = 0;
        if (daysInMonth[registeredMonth + 1] === 30) {
            startDayDiff = 30 - Number(registeredDay);
        }
        ;
        startDayDiff = 31 - Number(registeredDay);
        let count = 1;
        let days = 0;
        Promise.resolve().then(() => {
            while (count < monthDifference) {
                days += 1;
                count++;
            }
        });
        presentDayDiff = daysInMonth[presentMonth + 1] - 1;
        const totalDays = startDayDiff + days + presentDayDiff;
        const totalInterset = totalDays * bonus * 3600 * 24;
        this.availableWithdrawal = totalInterset;
    });
};
accountSchema.methods.getBalance = function () {
    return __awaiter(this, void 0, void 0, function* () {
        return this.balance;
    });
};
const Account = mongoose_1.default.model("Account", accountSchema);
exports.default = Account;
