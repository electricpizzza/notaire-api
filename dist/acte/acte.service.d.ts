import { Repository } from 'typeorm';
import { ActeEntity } from './acte.entity';
import { Acte } from './acte.model';
export declare class ActeService {
    private acteRepository;
    constructor(acteRepository: Repository<ActeEntity>);
    getOneActe(id: number): Promise<ActeEntity[]>;
    getAllActes(): Promise<ActeEntity[]>;
    createActe(acte: Acte): Promise<import("typeorm").InsertResult>;
    updateActe(acte: Acte): Promise<import("typeorm").UpdateResult>;
    deleteActe(id: number): Promise<import("typeorm").DeleteResult>;
}
