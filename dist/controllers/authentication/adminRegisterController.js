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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "../../src/config/config.env" });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = __importDefault(require("../../models/index"));
const Admin = index_1.default.Admin;
const adminRegisterController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const adminExists = yield Admin.findOne({ email });
        if (adminExists !== null) {
            throw ("This email account has been registered with a user.");
        }
        ;
        console.log("Admin: ", adminExists);
        const hashPassword = yield bcryptjs_1.default.hash(password, 9);
        console.log("Hashed password: ");
        const newAdmin = new Admin(Object.assign(Object.assign({}, req.body), { password: hashPassword }));
        const savedAdmin = yield newAdmin.save();
        // await Promise.all([adminExists, hashPassword, savedAdmin]);
        console.log("Saved admin: ");
        const userPayload = Object.assign({}, savedAdmin);
        const accesstoken = jsonwebtoken_1.default.sign(userPayload, process.env.ACCESS_TOKEN);
        return res.status(201).json({
            message: 'New Admin registered.',
            status: 'Successful',
            data: savedAdmin,
            token: accesstoken
        });
    }
    catch (error) {
        return res.status(500).json({
            message: `Failed to register admin.`,
            status: 'Error',
            data: `${error}`
        });
    }
    ;
});
exports.default = adminRegisterController;
