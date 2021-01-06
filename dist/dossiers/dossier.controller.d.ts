import { DossierService } from "./dossier.service";
import { ComptabiliteService } from "src/comptabilite/comptabilite.service";
export declare class DossierController {
    private readonly dossierServeice;
    private readonly comptabiliteService;
    constructor(dossierServeice: DossierService, comptabiliteService: ComptabiliteService);
    addDossier(docTitle: string, identifiant: string, docDescription: string, nature: string, libelle: string, dateOuverture: string, dateFermeture: string, NomMaitre: string, biens: number[], comparents: number[]): Promise<import("typeorm").InsertResult>;
    getDossiers(query: any): Promise<import("./dossier.entity").DossierEntity[]> | Promise<import("./dossier.entity").DossierEntity>;
    getOneDoc(docId: number): Promise<import("./dossier.entity").DossierEntity>;
    updateDoc(docId: number, docTitle: string, identifiant: string, docDescription: string, nature: string, libelle: string, dateOuverture: string, dateFermeture: string, NomMaitre: string, biens: number[], comparents: number[]): Promise<import("./dossier.entity").DossierEntity>;
    closeDossier(docId: number): Promise<import("./dossier.entity").DossierEntity>;
    deletDoc(docId: number): Promise<void>;
}
