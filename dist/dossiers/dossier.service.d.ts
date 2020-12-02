import { DossierEntity } from "./dossier.entity";
import { Dossier } from "./dossier.model";
import { Repository } from 'typeorm';
export declare class DossierService {
    private dossierRepository;
    constructor(dossierRepository: Repository<DossierEntity>);
    inserDossier(dossier: Dossier): Promise<import("typeorm").InsertResult>;
    getDocs(): Promise<DossierEntity[]>;
    getOneDossier(id: number): Promise<DossierEntity>;
    updateDossier(doc: Dossier): Promise<DossierEntity>;
    deletDossier(id: number): Promise<void>;
    closeDossier(id: number): Promise<DossierEntity>;
}
