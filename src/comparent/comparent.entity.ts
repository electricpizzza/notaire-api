import { ActeEntity } from "src/acte/acte.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { EntrepriseCom } from "./subcomparent/entreprise/entreprise.entity";
import { MineurEntity } from "./subcomparent/mineur/mineur.entity";
import { PersonPhysiqiueEntity } from "./subcomparent/person-phisique/person-phisique.entity";


@Entity()
export class ComparentEntity {

    @PrimaryGeneratedColumn('increment') public id: number;
    @Column("text") type: string;
    @Column("text") nom: string;
    @Column("date") dateAjout: Date;
}