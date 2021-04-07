"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware_1 = __importDefault(require("./authMiddleware"));
const middlewares = {
    authMiddleware: authMiddleware_1.default
};
exports.default = middlewares;
