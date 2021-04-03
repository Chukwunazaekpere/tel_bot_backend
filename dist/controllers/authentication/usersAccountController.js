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
const usersAccountController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Account.find();
        res.status(200).json({
            message: 'All users.',
            status: 'Successful',
            data: users
        });
    }
    catch (error) {
        res.status(400).json({
            message: `${error}`,
            status: 'Error',
            data: null
        });
    }
    ;
});
exports.default = usersAccountController;
