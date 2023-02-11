import { ITracking } from "src/interfaces/track.interface";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Role from "./role.model";
import User from "./user.model";

@Entity({ name: 'user_role' })
export default class UserRole implements ITracking {
    @PrimaryGeneratedColumn('uuid')
    UserRoleId: string;

    @Column({ default: false })
    Deleted: boolean;
    @CreateDateColumn()
    DateCreated: Date;
    @DeleteDateColumn()
    DateDeleted: Date;
    @UpdateDateColumn()
    DateModified: Date;

    @ManyToOne(() => User, (user) => user.userRoles)
    user: User;
    @ManyToOne(() => Role, (role) => role.userRoles)
    role: Role;
}