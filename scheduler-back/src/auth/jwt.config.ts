import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';
import { config } from 'dotenv';
config();


const configService = new ConfigService();

export const jwtConfig: JwtModuleOptions = {
    secret: configService.get<string>('SECRET'),
    signOptions: { expiresIn: "1d" }
}