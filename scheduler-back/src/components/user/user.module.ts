import { UserController } from './user.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/models/user.model';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [
        UserController,],
    providers: [UserService],
    exports: [TypeOrmModule]
})
export class UserModule { }
