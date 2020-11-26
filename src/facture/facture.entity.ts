import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FactureEntity {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column('int') dossier: number;
    @Column('int') client: number;
    @Column('text') description: string;
    @Column('real') total: number;
}