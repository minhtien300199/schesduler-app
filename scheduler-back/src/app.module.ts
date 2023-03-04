import { UserModule } from './components/user/user.module';
import { UserService } from './components/user/user.service';
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'tsconfig-paths/register';
import { dataSourceOption } from './typeOrm.config';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JwtService } from '@nestjs/jwt';


// const connection: Promise<Connection> = createConnection();

// export default connection;


@Module({
  imports: [
    UserModule,
    AuthModule,
    // ENV file config:
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    // DB config:
    TypeOrmModule.forRoot(dataSourceOption),
  ],
  controllers: [AppController],
  providers: [
    UserService, AppService, AuthService, JwtService],
})
export class AppModule { }
