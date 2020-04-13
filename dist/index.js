"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const minimist_1 = __importDefault(require("minimist"));
const app_1 = require("./app");
const controllers_1 = require("./controllers");
const processArguments = minimist_1.default(process.argv);
// tslint:disable-next-line: no-string-literal
const isDev = processArguments["dev"];
const app = new app_1.App([
    new controllers_1.TestController(),
], 3030, isDev);
app.listen();
//# sourceMappingURL=index.js.map