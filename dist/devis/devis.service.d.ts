import { Repository } from 'typeorm';
import { DeviseEntity } from './devis.entity';
import { Devis } from './devis.model';
export declare class DevisService {
    private devisRepository;
    constructor(devisRepository: Repository<DeviseEntity>);
    getAllDevis(): Promise<DeviseEntity[]>;
    getOneDevis(id: number): Promise<DeviseEntity>;
    createDevis(devis: Devis): Promise<import("typeorm").InsertResult>;
    updateDevis(devis: Devis): Promise<import("typeorm").UpdateResult>;
    deletDevis(id: number): Promise<import("typeorm").DeleteResult>;
}
