import {
    Controller,
    Get,
    HttpException
} from '@nestjs/common';
import fetch from 'node-fetch';

@Controller('todo')
export class TodoController {
    constructor(
        // private readonly postsService: PostsService
    ) {}


    @Get('/custom')
    findAll(): any {
        console.log('in custom')
        return {a:'custom'}
    }

    @Get()
    async mc(): Promise<any> {
        console.log('in mc')
        try {
            const url = `http://nginx-proxy/auth`
            const resp = await fetch(url)
            const data = await resp.json();
            console.log('data')
            console.log(data)
            return {a:'1'}
        } catch (e) {
            console.log(e)
            throw new HttpException(
                {
                    message: e,
                    data: null,
                    errors: [],
                },
                502
            );
        }

    }


}
