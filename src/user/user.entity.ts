import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class UserEntity {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') nom: string;
    @Column('text') prenom: string;
    @PrimaryColumn('varchar', { length: 50 }) email: string;
    @Column('text') role: string;
    @Column('text') password: string;

}