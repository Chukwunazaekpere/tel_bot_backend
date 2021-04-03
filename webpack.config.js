import { resolve } from "path";
import Dotenv from "dotenv-webpack";

export const entry = "./dist/index.js";
export const mode = "development";
export const output = {
    filename: "index.js",
    path: resolve(__dirname, "dist"),
};
export const node = {
    fs: "empty",
};
export const plugins = [new Dotenv()];