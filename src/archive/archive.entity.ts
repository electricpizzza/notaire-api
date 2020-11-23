import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArchiveEntity {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') titre: string;
    @Column('text') filesPath: string;
    @Column('int') dossiers: number;
}