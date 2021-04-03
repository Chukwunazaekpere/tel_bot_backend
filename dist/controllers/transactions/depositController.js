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
const Deposit = models_1.default.Deposits;
const depositController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newDeposit = new Deposit(Object.assign({}, data));
    try {
        const modelResponse = yield newDeposit.increaseBalance();
        if (typeof (modelResponse) === "string") {
            const message = "Unregistered user making a deposit.";
            throw message;
        }
        const saveDeposit = yield newDeposit.save();
        return res.status(201).json({
            message: 'Deposit was successful',
            status: "Success",
            data: saveDeposit
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `Deposit was unsuccessful.`,
            status: "Error",
            data: `${error}`
        });
    }
});
exports.default = depositController;
