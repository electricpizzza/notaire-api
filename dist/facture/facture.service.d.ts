import { Repository } from 'typeorm';
import { FactureEntity } from './facture.entity';
import { Facture } from './facture.model';
export declare class FactureService {
    private factureReppository;
    constructor(factureReppository: Repository<FactureEntity>);
    getOneFacture(id: number): Promise<FactureEntity>;
    getAllFactures(): Promise<FactureEntity[]>;
    createFacture(facture: Facture): Promise<import("typeorm").InsertResult>;
    anullerFacture(id: number): Promise<import("typeorm").DeleteResult>;
}
