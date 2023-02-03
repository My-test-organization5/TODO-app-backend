"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let TodoController = class TodoController {
    constructor() { }
    async mc() {
        console.log('in mc');
        try {
            const url = `http://nginx-proxy/auth`;
            const resp = await node_fetch_1.default(url);
            const data = await resp.json();
            console.log('data');
            console.log(data);
            return { a: '1' };
        }
        catch (e) {
            console.log(e);
            throw new common_1.HttpException({
                message: e,
                data: null,
                errors: [],
            }, 502);
        }
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "mc", null);
TodoController = __decorate([
    common_1.Controller('todo'),
    __metadata("design:paramtypes", [])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map