import { ActeEntity } from "src/acte/acte.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DossierEntity {
    @PrimaryGeneratedColumn('increment')public id: number;
    @Column('text') title: string;
    @Column('text') description: string;
    @Column("text") nature: string;
    @Column("text") libelle: string;
    @Column("date") dateOuverture: string;
    @Column("date") dateFermeture: string;
    @Column("text") NomMaitre:string;
    @Column("text") comparents:number[];
    @Column("text") bien:number[];

    @OneToMany(()=>ActeEntity, actes => actes.dossier)
    actes: ActeEntity;
}