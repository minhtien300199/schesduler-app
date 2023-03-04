import { MigrationInterface, QueryRunner } from "typeorm";

export class addPasswordToUser1677686729593 implements MigrationInterface {
    name = 'addPasswordToUser1677686729593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`noti_queue\` (\`NotiQueueId\` int NOT NULL AUTO_INCREMENT, \`Status\` varchar(255) NOT NULL, \`RetryTime\` int NOT NULL, \`LogStatus\` longtext NOT NULL, \`Deleted\` tinyint NOT NULL DEFAULT 0, \`DateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DateDeleted\` datetime(6) NULL, \`DateModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`NotiQueueId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`remind\` (\`RemindId\` int NOT NULL AUTO_INCREMENT, \`Description\` longtext NOT NULL, \`IsSilent\` tinyint NOT NULL DEFAULT 0, \`DueTime\` datetime NOT NULL, \`SnoozeTime\` int NOT NULL DEFAULT '0', \`SnoozeInterval\` int NOT NULL DEFAULT '0', \`Deleted\` tinyint NOT NULL DEFAULT 0, \`DateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DateDeleted\` datetime(6) NULL, \`DateModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userUserId\` varchar(36) NULL, \`notiQueueNotiQueueId\` int NULL, PRIMARY KEY (\`RemindId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`RoleId\` varchar(36) NOT NULL, \`RoleName\` varchar(255) NOT NULL, \`Deleted\` tinyint NOT NULL DEFAULT 0, \`DateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DateDeleted\` datetime(6) NULL, \`DateModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`RoleId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_role\` (\`UserRoleId\` varchar(36) NOT NULL, \`Deleted\` tinyint NOT NULL DEFAULT 0, \`DateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DateDeleted\` datetime(6) NULL, \`DateModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userUserId\` varchar(36) NULL, \`roleRoleId\` varchar(36) NULL, PRIMARY KEY (\`UserRoleId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_setting\` (\`UserSettingId\` int NOT NULL AUTO_INCREMENT, \`Deleted\` tinyint NOT NULL DEFAULT 0, \`DateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DateDeleted\` datetime(6) NULL, \`DateModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`UserSettingId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`UserId\` varchar(36) NOT NULL, \`FirstName\` varchar(255) NOT NULL, \`LastName\` varchar(255) NOT NULL, \`Email\` varchar(255) NOT NULL, \`PhoneNumber\` varchar(255) NOT NULL, \`IsActive\` tinyint NOT NULL DEFAULT 1, \`Deleted\` tinyint NOT NULL DEFAULT 0, \`DateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DateDeleted\` datetime(6) NULL, \`DateModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`Password\` varchar(255) NOT NULL, \`profileUserSettingId\` int NULL, UNIQUE INDEX \`REL_2f754baa080585883f617a1763\` (\`profileUserSettingId\`), PRIMARY KEY (\`UserId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`device\` (\`Id\` int NOT NULL AUTO_INCREMENT, \`DeviceId\` varchar(255) NOT NULL, \`Deleted\` tinyint NOT NULL DEFAULT 0, \`DateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DateDeleted\` datetime(6) NULL, \`DateModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userUserId\` varchar(36) NULL, PRIMARY KEY (\`Id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`system_setting\` (\`Key\` varchar(255) NOT NULL, \`Value\` longtext NOT NULL, \`Group\` longtext NOT NULL, \`Deleted\` tinyint NOT NULL DEFAULT 0, \`DateCreated\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`DateDeleted\` datetime(6) NULL, \`DateModified\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`Key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`remind\` ADD CONSTRAINT \`FK_1acc446844e35c1d3c39f5906d0\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`remind\` ADD CONSTRAINT \`FK_95e04412ed2f6185f9abbe7e435\` FOREIGN KEY (\`notiQueueNotiQueueId\`) REFERENCES \`noti_queue\`(\`NotiQueueId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`FK_da96c443031d8a3f812ce81d4fa\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_role\` ADD CONSTRAINT \`FK_fb5d40306efc2b6f20c17e4d8c0\` FOREIGN KEY (\`roleRoleId\`) REFERENCES \`role\`(\`RoleId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD CONSTRAINT \`FK_2f754baa080585883f617a1763b\` FOREIGN KEY (\`profileUserSettingId\`) REFERENCES \`user_setting\`(\`UserSettingId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`device\` ADD CONSTRAINT \`FK_e6d064846937975bda091b2b8be\` FOREIGN KEY (\`userUserId\`) REFERENCES \`user\`(\`UserId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`device\` DROP FOREIGN KEY \`FK_e6d064846937975bda091b2b8be\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_2f754baa080585883f617a1763b\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`FK_fb5d40306efc2b6f20c17e4d8c0\``);
        await queryRunner.query(`ALTER TABLE \`user_role\` DROP FOREIGN KEY \`FK_da96c443031d8a3f812ce81d4fa\``);
        await queryRunner.query(`ALTER TABLE \`remind\` DROP FOREIGN KEY \`FK_95e04412ed2f6185f9abbe7e435\``);
        await queryRunner.query(`ALTER TABLE \`remind\` DROP FOREIGN KEY \`FK_1acc446844e35c1d3c39f5906d0\``);
        await queryRunner.query(`DROP TABLE \`system_setting\``);
        await queryRunner.query(`DROP TABLE \`device\``);
        await queryRunner.query(`DROP INDEX \`REL_2f754baa080585883f617a1763\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`user_setting\``);
        await queryRunner.query(`DROP TABLE \`user_role\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP TABLE \`remind\``);
        await queryRunner.query(`DROP TABLE \`noti_queue\``);
    }

}
