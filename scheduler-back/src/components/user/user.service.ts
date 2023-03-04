/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from 'src/models/user.model';
import { DataSource, EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)
    private usersRepository: Repository<User>,
        private dataSource: DataSource) {
    }
    async findUserById(userId: string) {
        let result: User;
        try {
            // const manager: EntityManager = this.dataSource.manager;
            const targetUser = await this.usersRepository.findOne({
                where: {
                    UserId: userId,
                }
            });
            if (targetUser != null) {
                result = targetUser;
            }
        } catch (error) {

        }
        return result;
    }
}
