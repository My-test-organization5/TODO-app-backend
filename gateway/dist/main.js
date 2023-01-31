"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_service_1 = require("./services/config/config.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const port = new config_service_1.ConfigService().get('port');
    console.log(`GATEWAY PORT: ${port}`);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map