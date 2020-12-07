import { ActeEntity } from "src/acte/acte.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DossierEntity {
    @PrimaryGeneratedColumn('increment') public id: number;
    @Column('text') title: string;
    @Column('text') description: string;
    @Column("text") nature: string;
    @Column("text") libelle: string;
    @Column("date") dateOuverture: string;
    @Column("date", { nullable: true }) dateFermeture: string;
    @Column("text") NomMaitre: string;
    @Column("json") comparents: number[];
    @Column("json") bien: number[];

    @OneToMany(() => ActeEntity, actes => actes.dossier)
    actes: ActeEntity;
}