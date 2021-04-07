"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers;
    console.log("Cookies: ", authHeader);
    next();
};
exports.default = authMiddleware;
