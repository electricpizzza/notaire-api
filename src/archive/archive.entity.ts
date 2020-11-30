import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ArchiveEntity {

    @PrimaryGeneratedColumn('increment') id: number;
    @Column('text') titre: string;
    @Column('text') description: string;
    @Column('json') filesPath: string[];
    @Column('int') dossiers: number;
    @Column('text') mainFile: string;
}