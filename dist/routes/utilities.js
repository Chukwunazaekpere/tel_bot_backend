"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const utilRoutes = express_1.default.Router();
const controllers_1 = __importDefault(require("../controllers"));
utilRoutes.use('/team', controllers_1.default.teamController);
utilRoutes.use('/support', controllers_1.default.supportController);
exports.default = utilRoutes;
