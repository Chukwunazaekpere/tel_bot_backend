"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("../controllers/index"));
const router = express_1.Router();
router.post("/deposit", index_1.default.depositController);
router.get("/balance", index_1.default.balanceController);
router.post("/withdrawal", index_1.default.withdrawalController);
router.post("/invest", index_1.default.reinvestController);
exports.default = router;
