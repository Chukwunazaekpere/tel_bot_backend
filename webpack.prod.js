import { resolve } from "path";
import { DefinePlugin } from "webpack";

export const entry = "./dist/index.js";
export const mode = "production";
export const output = {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
};
export const node = {
    fs: "empty",
};
export const plugins = [
    new DefinePlugin({
        "process.env": {},
    }),
];