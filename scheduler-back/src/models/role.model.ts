import { ITracking } from "src/interfaces/track.interface";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import UserRole from "./user-role.model";

@Entity({ name: 'role' })
export default class Role implements ITracking {
    @PrimaryGeneratedColumn('uuid')
    RoleId: string;
    @Column()
    RoleName: string;
    @Column({ default: false })
    Deleted: boolean;
    @CreateDateColumn()
    DateCreated: Date;
    @DeleteDateColumn()
    DateDeleted: Date;
    @UpdateDateColumn()
    DateModified: Date;
    // relation
    @OneToMany(() => UserRole, (ur) => ur.user)
    userRoles: UserRole[];
}