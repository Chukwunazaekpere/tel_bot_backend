"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appRouter = express_1.Router();
//========================= imports =====================
const transactions_1 = __importDefault(require("./transactions"));
const authentication_1 = __importDefault(require("./authentication"));
const utilities_1 = __importDefault(require("./utilities"));
//=======================================================
const controllers_1 = __importDefault(require("../controllers"));
//=======================================================
appRouter.use('/auth', authentication_1.default);
appRouter.use('/transactions', transactions_1.default);
appRouter.use('/info', utilities_1.default);
//========================================================
appRouter.get("/", controllers_1.default.homeController);
exports.default = appRouter;
