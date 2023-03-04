import { ITracking } from "src/interfaces/track.interface";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Device from "./device.model";
import Remind from "./remind.model";
import UserRole from "./user-role.model";
import UserSetting from "./user-setting.model";

@Entity({ name: 'user' })
export default class User implements ITracking {
    @PrimaryGeneratedColumn('uuid')
    UserId: string;

    @Column()
    FirstName: string;
    @Column()
    LastName: string;
    @Column()
    Email: string;
    @Column()
    PhoneNumber: string;
    @Column({ default: true })
    IsActive: boolean;
    @Column({ default: false })
    Deleted: boolean;
    @CreateDateColumn()
    DateCreated: Date;
    @DeleteDateColumn()
    DateDeleted: Date;
    @UpdateDateColumn()
    DateModified: Date;
    @Column({ type: 'varchar', length: 255 })
    Password: string;


    @OneToMany(() => UserRole, (ur) => ur.user)
    userRoles: UserRole[];
    @OneToMany(() => Remind, (r) => r.user)
    reminds: Remind[];
    @OneToMany(() => Device, (d) => d.user)
    devices: Device[];
    @OneToOne(() => UserSetting)
    @JoinColumn()
    profile: UserSetting;

}