import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ServiceEntity {
    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') libelle: string;
    @Column('real') tva: number;
    @Column('text') partie: string;
    @Column('text') type: string
}