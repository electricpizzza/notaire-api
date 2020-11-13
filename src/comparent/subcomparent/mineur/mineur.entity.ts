
import { ComparentEntity } from "src/comparent/comparent.entity";
import { Comparent } from "src/comparent/comparent.model";
import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { PersonPhysiqiueEntity } from "../person-phisique/person-phisique.entity";
import { PersonPhisique } from "../person-phisique/person-phisique.model";

@Entity()
export class MineurEntity {


    @PrimaryGeneratedColumn()
    @OneToOne(() => ComparentEntity)
    @JoinTable()
    comparent: ComparentEntity;

    @Column("int") tutelle: number[];


    @Column("text") nomFr: string;
    @Column("text") nomAr: string;
    @Column("text") prenomFr: string;
    @Column("text") prenomAr: string;
    @Column("text") nationalite: string;

    @Column("text") nomPereFr: string;
    @Column("text") nomPereAr: string;
    @Column("text") nomMereFr: string;
    @Column("text") nomMereAr: string;

    @Column("date") dateNaissance: Date;

    @Column("text") typeIdentification: string;
    @Column("text") Identification: string;
    @Column("date") IdentificationValable: Date;

}