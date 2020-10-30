import { ActeEntity } from "src/acte/acte.entity";

import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ModelEntity{
    @PrimaryGeneratedColumn("increment") id:number;
    @Column('text') language:string;        
    @Column('text') redacteur:string;        
    @Column('text') libelle:string;        
    @Column('text') type:string;        
    @Column('text') champs: any;      
    @Column('text') boilerPlate:any;   

    @OneToMany(()=> ActeEntity, actes => actes.model)
    actes: ActeEntity[];
}