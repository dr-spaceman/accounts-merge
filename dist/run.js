"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accounts_json_1 = __importDefault(require("./accounts.json"));
const accounts_merge_js_1 = __importDefault(require("./accounts-merge.js"));
console.log((0, accounts_merge_js_1.default)(accounts_json_1.default));
