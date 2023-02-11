import { ITracking } from "src/interfaces/track.interface";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import NotiQueue from "./noti-queue.model";
import User from "./user.model";



@Entity({ name: 'remind' })
export default class Remind implements ITracking {
    @PrimaryGeneratedColumn()
    RemindId: number;

    @Column({ type: 'longtext' })
    Description: string;
    @Column({ default: false })
    IsSilent: boolean;
    @Column({ type: 'timestamptz' })
    DueTime: Date;
    @Column({ default: 0 })
    SnoozeTime: number;
    @Column({ default: 0 })
    SnoozeInterval: number;
    @Column({ default: false })
    Deleted: boolean;
    @CreateDateColumn()
    DateCreated: Date;
    @DeleteDateColumn()
    DateDeleted: Date;
    @UpdateDateColumn()
    DateModified: Date;

    @ManyToOne(() => User, (user) => user.reminds)
    user: User;
    @ManyToOne(() => NotiQueue, (nq) => nq.reminds)
    notiQueue: NotiQueue;

}