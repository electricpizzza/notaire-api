import { ActeEntity } from "src/acte/acte.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BienEntity{

    @PrimaryGeneratedColumn('increment') id:number;
    @Column('text') libelle: string;
    @Column('text') type: string;
    @Column('text') description: string;
    @Column('text') address: string;
    @Column('text') ville: string;
    @Column('text') Superficie: string;
    @Column('int') nb_piece: number;
    @Column('int') etage: number;
    @Column('text') Immeuble: string;
    @Column('text') terrainType: string;
    @Column('text') ancfcc: string;
    @Column('real') valeur: number;
    

    @OneToMany(() => ActeEntity, actes => actes.bein)
    actes: ActeEntity[];
}
