import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DeviseEntity {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') termes: string;
    @Column('date') dateDevis: Date;
    @Column('json') client: any;
    @Column('real') remisG: number;
    @Column('real') total: number;
    @Column('json') articles: any
    @Column('text') maitre: string
}