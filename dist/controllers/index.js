"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//======================= authentication imports ====================
const registerController_1 = __importDefault(require("./authentication/registerController"));
const usersAccountController_1 = __importDefault(require("./authentication/usersAccountController"));
const homeController_1 = __importDefault(require("./transactions/homeController"));
//====================== transactions inport ========================
// import balanceController from './transactions/accountControllers';
const depositController_1 = __importDefault(require("./transactions/depositController"));
const withdrawalsController_1 = __importDefault(require("./transactions/withdrawalsController"));
const investmentController_1 = __importDefault(require("./transactions/investmentController"));
const controllers = {
    // balanceController,
    depositController: depositController_1.default,
    withdrawalController: withdrawalsController_1.default,
    reinvestController: investmentController_1.default,
    //========== auth =================
    registerController: registerController_1.default,
    usersController: usersAccountController_1.default,
    //======================
    homeController: homeController_1.default
};
exports.default = controllers;
