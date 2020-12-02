import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm'
@Entity()
@Unique("UQ_EMAIL", ["email"])
export class UserEntity {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') nom: string;
    @Column('text') prenom: string;
    @PrimaryColumn('varchar', { length: 50 }) email: string;
    @Column('text') role: string;
    @Column('text') password: string;
}