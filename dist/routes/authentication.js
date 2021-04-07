"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../controllers/index"));
const middleware_1 = __importDefault(require("../middleware"));
const router = express_1.Router();
router.use('/register', middleware_1.default.authMiddleware, index_1.default.registerController);
router.use('/register-admin', index_1.default.adminRegisterController);
router.use('/users-account', index_1.default.usersController);
exports.default = router;
