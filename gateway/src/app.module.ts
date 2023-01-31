import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ClientProxyFactory } from '@nestjs/microservices';

import { AuthController } from './auth.controller';
// import { TasksController } from './tasks.controller';

// import { AuthGuard } from './services/guards/authorization.guard';
// import { PermissionGuard } from './services/guards/permission.guard';

import { ConfigService } from './services/config/config.service';

@Module({
  imports: [],
  // controllers: [UsersController, TasksController],
  controllers: [AuthController],
  providers: [
    ConfigService,
    {
      provide: 'AUTH_SERVICE',
      useFactory: (configService: ConfigService) => {
        const authServiceOptions = configService.get('authService');
        console.log('authServiceOptions');
        console.log(authServiceOptions);
        return ClientProxyFactory.create(authServiceOptions);
      },
      inject: [ConfigService],
    },
    // {
    //   provide: 'USER_SERVICE',
    //   useFactory: (configService: ConfigService) => {
    //     const userServiceOptions = configService.get('userService');
    //     return ClientProxyFactory.create(userServiceOptions);
    //   },
    //   inject: [ConfigService],
    // },
    // {
    //   provide: 'TASK_SERVICE',
    //   useFactory: (configService: ConfigService) => {
    //     return ClientProxyFactory.create(configService.get('taskService'));
    //   },
    //   inject: [ConfigService],
    // },
    // {
    //   provide: 'PERMISSION_SERVICE',
    //   useFactory: (configService: ConfigService) => {
    //     return ClientProxyFactory.create(
    //       configService.get('permissionService'),
    //     );
    //   },
    //   inject: [ConfigService],
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: PermissionGuard,
    // },
  ],
})
export class AppModule {}
