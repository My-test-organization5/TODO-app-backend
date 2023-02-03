"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const microservices_1 = require("@nestjs/microservices");
class ConfigService {
    constructor() {
        this.envConfig = null;
        this.envConfig = {};
        this.envConfig.port = process.env.API_GATEWAY_PORT;
        this.envConfig.authService = {
            options: {
                port: process.env.AUTH_SERVICE_PORT,
                host: process.env.AUTH_SERVICE_HOST,
            },
            transport: microservices_1.Transport.TCP,
        };
    }
    get(key) {
        return this.envConfig[key];
    }
}
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map