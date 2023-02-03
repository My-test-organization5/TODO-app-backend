import {
    Controller,
    Get,
} from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(
        // private readonly postsService: PostsService
    ) {}

    @Get()
    findAll(): any {
        return {a:'auth1'}
    }

}
