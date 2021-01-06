import { Repository } from 'typeorm';
import { ComptabiliteEntity } from './comptabilite.entity';
import { Comptabilite } from './comptabilite.model';
export declare class ComptabiliteService {
    private compatabilitRepository;
    constructor(compatabilitRepository: Repository<ComptabiliteEntity>);
    getAllComptas(): Promise<ComptabiliteEntity[]>;
    getOneCompta(id: number): Promise<ComptabiliteEntity[]>;
    getByDossier(dossier: number): Promise<ComptabiliteEntity[]>;
    createCompta(compta: Comptabilite): Promise<import("typeorm").InsertResult>;
    updateCompta(compt: Comptabilite): Promise<import("typeorm").UpdateResult>;
}
