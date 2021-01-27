import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class AveuEntity {
    @PrimaryGeneratedColumn('increment') id: number;
    @Column('int') comparent: number;
    @Column('int') bien: number;

    @Column('text') status: string;
    @Column('json') partieChp: any;
    @Column('text') partieStr: string;
    @Column('json') recu: any;
}