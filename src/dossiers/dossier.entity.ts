import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DossierEntity {
    @PrimaryGeneratedColumn('increment')public id: number;
    @Column('text') title: string;
    @Column('text') description: string;
}