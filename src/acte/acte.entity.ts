import { BienEntity } from "src/bien/bein.entity";
import { ComparentEntity } from "src/comparent/comparent.entity";
import { DossierEntity } from "src/dossiers/dossier.entity";
import { ModelEntity } from "src/model/model.entity";
import { Model } from "src/model/model.model";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ActeEntity{
    @PrimaryGeneratedColumn("increment") id:number;
    @Column('text') libelle: string;
    @Column('text') redacteur: string;
    @Column('text') contenu: any;
    @Column('text') dateRedaction: Date;
    @Column('text') fichier: string;
    
    @ManyToOne(() => ModelEntity, model => model.actes)
    model:ModelEntity; 

    @OneToMany(()=> BienEntity, bein => bein.actes)
    bein:BienEntity;

    @ManyToOne(() => DossierEntity, dossier => dossier.actes)
    dossier: DossierEntity;
}