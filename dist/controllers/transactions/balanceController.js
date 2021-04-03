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
const Account = models_1.default.Account;
const Users = models_1.default.Users;
const balanceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    try {
        const userExists = yield Users.findOne({ username });
        if (userExists === null) {
            const message = "Unregistered user.";
            throw message;
        }
        const userId = userExists.id;
        const usersAccount = yield Account.findOne({ user: userId });
        const balance = usersAccount.balance;
        return res.status(200).json({
            message: 'Account Balance',
            status: "Success",
            data: balance
        });
    }
    catch (error) {
        return res.status(500).json({
            message: `Error fetching balance`,
            status: "Error",
            data: `${error}`
        });
    }
});
exports.default = balanceController;
