import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';

import { AuthModule } from './auth.module';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const port = new ConfigService().get('port');
  console.log(`AUTHPORT12: ${port}`);
  const app = await NestFactory.createMicroservice(AuthModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);
  await app.listenAsync();
}
bootstrap();
