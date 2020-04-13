"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
class App {
    constructor(controllers, portNumber, isDevelopment) {
        this.app = express_1.default();
        this.port = portNumber;
        this.isDev = isDevelopment;
        this.app.get('/', (_req, res) => {
            res.send('the app is working with hot module set up');
        });
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        // initialize middlewares here
        this.app.use(body_parser_1.default.json());
        if (this.isDev) {
            this.app.use(morgan_1.default('dev'));
        }
        else {
            this.app.use(morgan_1.default('tiny'));
        }
    }
    initializeControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, err => {
            if (err) {
                return console.error(err);
            }
            return console.log(`server is listening on ${this.port}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map