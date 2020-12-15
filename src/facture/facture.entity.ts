import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FactureEntity {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') reference: string;
    @Column('text') termes: string;
    @Column('date') dateFacture: Date;
    @Column('json') client: any;
    @Column('real') remisG: number;
    @Column('real') total: number;
    @Column('text') payment: string;
    @Column('json') articles: any;
    @Column('text') maitre: string;
    @Column('text') link: string;
}