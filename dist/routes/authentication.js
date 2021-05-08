"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../controllers/index"));
const middleware_1 = __importDefault(require("../middleware"));
const authRouter = express_1.Router();
authRouter.use('/register', middleware_1.default.authMiddleware, index_1.default.registerController);
authRouter.use('/register-admin', index_1.default.adminRegisterController);
authRouter.use('/users-account', index_1.default.usersController);
exports.default = authRouter;
