import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TransactionEntity {
    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') libelle: string;
    @Column('int') comptabilite: number;
    @Column('text') typeTrans: string;
    @Column('text') typePay: string;
    @Column('int') comparent: number;
    @Column('real') valeur: number;
    @Column('date') dateTrans: Date;
}