import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ActionEntity {
    @PrimaryGeneratedColumn('increment') id: number;
    @Column('int') dossier: number;
    @Column('int') user: number;
    @Column('text') type: string;
    @Column('date') date: Date;
    @Column('text') description: string;
}