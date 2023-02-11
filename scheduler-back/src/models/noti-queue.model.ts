import { ITracking } from "src/interfaces/track.interface";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Remind from "./remind.model";


@Entity({ name: 'noti_queue' })
export default class NotiQueue implements ITracking {
    @PrimaryGeneratedColumn()
    NotiQueueId: number;

    @Column()
    Status: string;
    @Column()
    RetryTime: number;
    @Column({ type: 'longtext' })
    LogStatus: string;
    @Column({ default: false })
    Deleted: boolean;
    @CreateDateColumn()
    DateCreated: Date;
    @DeleteDateColumn()
    DateDeleted: Date;
    @UpdateDateColumn()
    DateModified: Date;

    @OneToMany(() => Remind, (r) => r)
    reminds: Remind[];
}