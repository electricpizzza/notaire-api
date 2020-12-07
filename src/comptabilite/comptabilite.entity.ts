import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ComptabiliteEntity {
    @PrimaryGeneratedColumn('increment') id: number;
    @Column('int') dossier: number;
    @Column('text') description: string;

}