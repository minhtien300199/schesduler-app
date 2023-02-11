import { ITracking } from "src/interfaces/track.interface";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'system_setting' })
export default class SystemSetting implements ITracking {
    @PrimaryColumn({ type: 'varchar', length: 255 })
    Key: string;

    @Column({ type: 'longtext' })
    Value: string;
    @Column({ type: 'longtext' })
    Group: string;
    @Column({ default: false })
    Deleted: boolean;
    @CreateDateColumn()
    DateCreated: Date;
    @DeleteDateColumn()
    DateDeleted: Date;
    @UpdateDateColumn()
    DateModified: Date;
}
