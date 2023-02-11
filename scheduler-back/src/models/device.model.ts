import { ITracking } from "src/interfaces/track.interface";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import User from "./user.model";

@Entity({ name: 'device' })
export default class Device implements ITracking {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({ type: 'varchar', length: 255 })
    DeviceId: string;

    @Column({ default: false })
    Deleted: boolean;
    @CreateDateColumn()
    DateCreated: Date;
    @DeleteDateColumn()
    DateDeleted: Date;
    @UpdateDateColumn()
    DateModified: Date;

    @ManyToOne(() => User, (user) => user.devices)
    user: User;
}