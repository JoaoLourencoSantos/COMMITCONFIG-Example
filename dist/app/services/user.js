"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    constructor() {
        this.findAll = async () => {
            return ["João", "Marcos", "Érika", "Pedro"];
        };
    }
}
exports.default = new UserService();
