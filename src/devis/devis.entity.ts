import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DeviseEntity {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') termes: string;
    @Column('date') dateDevis: Date;
    @Column('int') client: number;
    @Column('int') remisG: number;
    @Column('json') articles: any
}