/* eslint-disable @typescript-eslint/no-var-requires */
import 'tsconfig-paths/register';
import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();


const configService = new ConfigService();

export const dataSourceOption: DataSourceOptions = {
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: parseInt(configService.get<string>('DB_PORT')),
    username: configService.get<string>('DB_USER'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: ["dist/models/*.model.js"],
    migrations: ['dist/migrations/*.js'],

    synchronize: false,

}

const dbSource = new DataSource(dataSourceOption);

export default dbSource;