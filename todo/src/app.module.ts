import { Module } from '@nestjs/common';

import { TodoController } from './todo/todo.controller'

import { ConfigService } from './services/config/config.service';

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [
    ConfigService,
  ],
})
export class AppModule {}
