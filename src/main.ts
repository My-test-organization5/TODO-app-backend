import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/config';

async function bootstrap() {
  const appConfig = config().app;
  const port = appConfig.port;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
