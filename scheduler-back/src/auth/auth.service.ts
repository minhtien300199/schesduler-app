import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import User from 'src/models/user.model';
import { ResponseMessage } from 'src/views-entities/enums/response.enum';
import { LoginModel } from 'src/views-entities/login.model';
import { ReturnResult } from 'src/views-entities/return-result.model';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
    private jwtService: JwtService,
    private configService: ConfigService) {

  }

  async login(model: LoginModel): Promise<ReturnResult<{ token: string }>> {
    const result = new ReturnResult<{ token: string }>();
    result.result = {
      token: null
    };
    try {
      if (model) {
        const user = await this.usersRepository.findOne({
          where: {
            Deleted: false,
            Email: model.Email
          }
        });
        if (user) {
          // compare password:
          const match = await bcrypt.compare(model.Password, user.Password);
          if (match) {
            // gen token:
            const payLoad: any = {
              userId: user.UserId,
              userRole: user.userRoles,
              email: user.Email
            }
            const userToken = this.jwtService.sign(payLoad, {
              secret: this.configService.get<string>("TOKEN")
            });
            result.result.token = userToken;
          } else {
            result.message = "Mail or Password was incorrect.Please try again.";
          }
        } else {
          result.message = "Invalid Mail supplied. Please try again.";
        }
      }
    } catch (error) {
      result.message = ResponseMessage.TechnicalError;
    }
    return result;
  }
  async regisUser(model: User) {
    const result = new ReturnResult<boolean>()
    try {
      if (model) {
        const isExist = await this.usersRepository.findOne({
          where: {
            Email: model.Email,
            Deleted: false
          }
        });
        if (!isExist) {
          const unHashPassword = model.Password;
          const salt = await bcrypt.genSaltSync(10);
          const hashPassword = await bcrypt.hash(unHashPassword, salt);
          model.Password = hashPassword;
          result.result = await this.usersRepository.save(model) != null ? true : false;
        } else {
          result.message = "This user has existed. Please login";
        }
      }
    } catch (error) {
      result.message = error.message;
    }
    return result;
  }
}
