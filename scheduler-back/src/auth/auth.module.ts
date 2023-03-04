import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConfig } from './jwt.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/models/user.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register(jwtConfig)
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService]
})
export class AuthModule { }
