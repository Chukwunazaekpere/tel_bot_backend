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
const models_1 = __importDefault(require("../../models"));
const Withdrawal = models_1.default.Withdrawals;
const withdrawalController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newWithdrawal = new Withdrawal(Object.assign({}, data));
    try {
        const modelResponse = newWithdrawal.decreaseBalance();
        if (typeof (modelResponse) === "string") {
            const message = `${modelResponse}`;
            throw message;
        }
        const saveDeposit = yield newWithdrawal.save();
        return res.status(201).json({
            message: 'Withdrawal was successful.',
            status: "Success",
            data: saveDeposit
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `Withdrawal was unsuccessful.`,
            status: "Error",
            data: `${error}`
        });
    }
});
exports.default = withdrawalController;
