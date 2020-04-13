"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Controller {
    constructor(pathValue) {
        this.router = express_1.default.Router();
        this.path = pathValue;
    }
}
exports.Controller = Controller;
//# sourceMappingURL=Controller.js.map