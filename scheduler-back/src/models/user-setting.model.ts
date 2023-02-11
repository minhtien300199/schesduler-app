import { ITracking } from "src/interfaces/track.interface";
import { Entity, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user_setting' })
export default class UserSetting implements ITracking {
    @PrimaryGeneratedColumn()
    UserSettingId: number;


    @Column({ default: false })
    Deleted: boolean;
    @CreateDateColumn()
    DateCreated: Date;
    @DeleteDateColumn()
    DateDeleted: Date;
    @UpdateDateColumn()
    DateModified: Date;
}
