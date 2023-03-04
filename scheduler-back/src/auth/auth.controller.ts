import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import User from 'src/models/user.model';
import { ResponseMessage } from 'src/views-entities/enums/response.enum';
import { LoginModel } from 'src/views-entities/login.model';
import { ReturnResult } from 'src/views-entities/return-result.model';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    // return this.authService.create(createAuthDto);
  }
  @Post('register')
  async register(@Body() model: User) {
    let result = new ReturnResult<any>();
    try {
      result = await this.authService.regisUser(model);
    } catch (error) {
      result.message = ResponseMessage.TechnicalError;
    }
    return result;
  }
  @Post('login')
  async login(@Body() model: LoginModel) {
    let result = new ReturnResult<{ token: string }>();
    try {
      result = await this.authService.login(model);
    } catch (error) {
      result.message = ResponseMessage.TechnicalError;
    }
    return result;
  }
}
