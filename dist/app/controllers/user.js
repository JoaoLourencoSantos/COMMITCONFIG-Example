"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../services/user"));
class UserController {
    constructor() {
        this.findAll = async (_, res) => {
            res.status(200).json(await user_1.default.findAll());
        };
    }
}
exports.default = new UserController();
