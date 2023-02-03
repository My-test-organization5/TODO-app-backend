import { Module } from '@nestjs/common';

import { AuthController } from './auth/auth.controller'

import { ConfigService } from './services/config/config.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [
    ConfigService,
  ],
})
export class AppModule {}
