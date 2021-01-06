import { Repository } from 'typeorm';
import { ActeEntity } from './acte.entity';
import { Acte } from './acte.model';
import { ModelEntity } from 'src/model/model.entity';
import { BienEntity } from 'src/bien/bein.entity';
import { ComparentEntity } from 'src/comparent/comparent.entity';
export declare class ActeService {
    private acteRepository;
    private modelRepository;
    private bienRepository;
    private comparentRepository;
    constructor(acteRepository: Repository<ActeEntity>, modelRepository: Repository<ModelEntity>, bienRepository: Repository<BienEntity>, comparentRepository: Repository<ComparentEntity>);
    getOneActe(id: number): Promise<ActeEntity[]>;
    getAllActes(): Promise<ActeEntity[]>;
    createActe(acte: Acte): Promise<import("typeorm").InsertResult>;
    updateActe(acte: Acte): Promise<import("typeorm").UpdateResult>;
    deleteActe(id: number): Promise<import("typeorm").DeleteResult>;
}
