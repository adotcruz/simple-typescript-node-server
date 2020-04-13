"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Controller_1 = require("./Controller");
class TestController extends Controller_1.Controller {
    constructor() {
        super('/test');
        this.getTest = (_, res) => {
            res.send('here in test controller i think it works!');
        };
        this.postTest = (_, res) => {
            res.send({
                data: 'fake',
            });
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getTest);
        this.router.get(`${this.path}/data`, this.postTest);
    }
}
exports.TestController = TestController;
//# sourceMappingURL=TestController.js.map