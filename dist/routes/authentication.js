"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers"));
const router = express_1.Router();
router.use('/register', controllers_1.default.registerController);
router.use('/users-account', controllers_1.default.usersController);
exports.default = router;
