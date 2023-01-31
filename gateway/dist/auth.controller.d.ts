import { ClientProxy } from '@nestjs/microservices';
export declare class AuthController {
    private readonly authServiceClient;
    constructor(authServiceClient: ClientProxy);
    getHello(): unknown;
}
