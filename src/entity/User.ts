import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export type UserRoleType = 'create' | 'read' | '';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({
        type: 'set',
        enum: ['create', 'read', ''],
        default: ['']
    })
    permissions: UserRoleType[];

    @Column('uuid')
    token: string;

    @Column({ default: false })
    isAdmin: boolean;
}
