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
const index_1 = __importDefault(require("../../models/index"));
const Users = index_1.default.Users;
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.body;
    const newUser = new Users({
        username
    });
    try {
        const userExists = yield Users.findOne({ username });
        if (userExists !== null) {
            throw ("You're a registered user.");
        }
        ;
        const savedUser = yield newUser.save();
        savedUser.createAccount();
        return res.status(201).json({
            message: 'New user registered.',
            status: 'Successful',
            data: savedUser
        });
    }
    catch (error) {
        return res.status(400).json({
            message: `Failed to register user. ${error}`,
            status: 'Error',
            data: null
        });
    }
    ;
});
exports.default = registerController;
