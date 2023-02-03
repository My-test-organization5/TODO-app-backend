import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './services/config/config.service';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = new ConfigService().get('port');
  console.log(`TODO PORT22: ${port}`);
  await app.listen(port);

  const server = app.getHttpServer();
  const router = server._events.request._router;
  const availableRoutes: [] = router.stack
      .map(layer => {
        if (layer.route) {
          return {
            route: {
              path: layer.route?.path,
              method: layer.route?.stack[0].method,
            },
          };
        }
      })
      .filter(item => item !== undefined);
  console.log(availableRoutes);
}
bootstrap();
