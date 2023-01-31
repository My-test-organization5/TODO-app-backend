"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const auth_controller_1 = require("./auth.controller");
const config_service_1 = require("./services/config/config.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [],
        controllers: [auth_controller_1.AuthController],
        providers: [
            config_service_1.ConfigService,
            {
                provide: 'AUTH_SERVICE',
                useFactory: (configService) => {
                    const authServiceOptions = configService.get('authService');
                    console.log('authServiceOptions');
                    console.log(authServiceOptions);
                    return microservices_1.ClientProxyFactory.create(authServiceOptions);
                },
                inject: [config_service_1.ConfigService],
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map