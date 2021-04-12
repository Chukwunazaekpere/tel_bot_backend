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
Object.defineProperty(exports, "__esModule", { value: true });
exports.supportController = exports.teamController = void 0;
const teamController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = "Hello there from the AmcorTrading Team.";
    return res.send({
        message
    });
});
exports.teamController = teamController;
const supportController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const message = {
        Email: "amcortradingbot@gmail.com",
        Team: "@amcortradingsupport_team",
        Assisst: "@Amcortrading_Assists"
    };
    return res.send(Object.assign({}, message));
});
exports.supportController = supportController;
