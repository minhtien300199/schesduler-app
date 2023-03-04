/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginModel } from 'src/views-entities/login.model';

@Controller('user')
export class UserController {
    @Get('auth')
    login(@Body() loginModel: LoginModel, @Res() res: Response) {
        console.log(loginModel);
        return res.status(HttpStatus.OK).json(loginModel);
    }
}
