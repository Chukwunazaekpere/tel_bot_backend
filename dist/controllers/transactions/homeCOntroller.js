"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const homeController = (req, res) => {
    return res.status(200).json({
        message: 'This is AmcorTraadingBot.',
        status: "Success",
        data: null
    });
};
exports.default = homeController;
