import { ComparentEntity } from "src/comparent/comparent.entity";
import { Entity, OneToOne, PrimaryGeneratedColumn, JoinTable, Column } from "typeorm";

@Entity()
export class BanqueEntity {

    @PrimaryGeneratedColumn()
    @OneToOne(() => ComparentEntity)
    @JoinTable()
    comparent: ComparentEntity;

    @Column('text') libelle: string;
    @Column('text') libelleAr: string;
    @Column('text') Agence: string;
    @Column('text') AgenceAr: string;
    @Column('text') addresse: string;
    @Column('text') addresseAr: string;
    @Column('text') tel: string;
    @Column('text') ville: string;
    @Column('text') villeAr: string;

}