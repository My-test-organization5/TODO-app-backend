import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = new ConfigService().get('port');
  console.log(`TODO PORT22: ${port}`);
  await app.listen(port);
}
bootstrap();
