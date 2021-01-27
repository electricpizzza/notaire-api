import { join } from "path";
import { ComparentEntity } from "src/comparent/comparent.entity";
import { Comparent } from "src/comparent/comparent.model";
import { Column, Entity, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntrepriseCom } from "../entreprise/entreprise.entity";
import { MineurEntity } from "../mineur/mineur.entity";
import { Mineur } from "../mineur/mineur.model";

@Entity()
export class PersonPhysiqiueEntity {

    @PrimaryGeneratedColumn()
    @OneToOne(() => ComparentEntity)
    @JoinTable()
    comparent: ComparentEntity;

    @Column('text') nomFr: string;
    @Column('text') nomAr: string;
    @Column('text') prenomFr: string;
    @Column('text') prenomAr: string;
    @Column('text') nationalite: string;
    @Column('text') nationaliteAr: string;
    @Column('text') fonction: string;
    @Column('text') fonctionAr: string;
    @Column('text') Adresse: string;
    @Column('text') AdresseAr: string;

    @Column('text') nomPereFr: string;
    @Column('text') nomPereAr: string;
    @Column('text') nomMereFr: string;
    @Column('text') nomMereAr: string;

    @Column('text') situation: string;
    @Column('date') dateNaissance: Date;
    @Column('text') lieuxNaissance: string;
    @Column('text') lieuxNaissanceAr: string;
    @Column('text') nomCompanionFr: string;
    @Column('text') nomCompanionAr: string;

    @Column('text') typeIdentification: string;
    @Column('text') Identification: string;
    @Column('date') IdentificationValable: Date;
    @Column('text') tel: string;

}