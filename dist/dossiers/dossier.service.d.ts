import { DossierEntity } from "./dossier.entity";
import { Dossier } from "./dossier.model";
import { Repository } from 'typeorm';
import { BienEntity } from "src/bien/bein.entity";
import { ComparentEntity } from "src/comparent/comparent.entity";
export declare class DossierService {
    private dossierRepository;
    private bienRepository;
    private comparentRepository;
    constructor(dossierRepository: Repository<DossierEntity>, bienRepository: Repository<BienEntity>, comparentRepository: Repository<ComparentEntity>);
    inserDossier(dossier: Dossier): Promise<import("typeorm").InsertResult>;
    getDocs(): Promise<DossierEntity[]>;
    getOneDossier(id: number): Promise<DossierEntity>;
    getDocByIdentifiant(identifiant: string): Promise<DossierEntity>;
    searchDoc(libelle?: any, comp?: any): Promise<DossierEntity[]>;
    updateDossier(doc: Dossier): Promise<DossierEntity>;
    deletDossier(id: number): Promise<void>;
    closeDossier(id: number): Promise<DossierEntity>;
}
