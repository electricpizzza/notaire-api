import { ComparentEntity } from "src/comparent/comparent.entity";
import { Comparent } from "src/comparent/comparent.model";
import { Column, Entity, JoinTable, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PersonPhysiqiueEntity } from "../person-phisique/person-phisique.entity";
import { PersonPhisique } from "../person-phisique/person-phisique.model";


@Entity()
export class EntrepriseCom {

    @PrimaryGeneratedColumn()
    @OneToOne(() => ComparentEntity)
    @JoinTable()
    comparent: ComparentEntity;

    @Column('text') raisonSociale: string;
    @Column('text') raisonSocialeAr: string;
    @Column('text') ice: string;
    @Column('text') rc: string;
    @Column('int') cnss: number;
    @Column('text') Adresse: string;
    @Column('text') AdresseAr: string;
    @Column('text') IDF: string;
    @Column('text') RS: string;
    @Column('text') tel: string;
    @Column('text') capital: string;
    @Column('json') representant: any;

}