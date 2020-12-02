import { DossierService } from "./dossier.service";
export declare class DossierController {
    private readonly dossierServeice;
    constructor(dossierServeice: DossierService);
    addDossier(docTitle: string, docDescription: string, nature: string, libelle: string, dateOuverture: string, dateFermeture: string, NomMaitre: string, biens: number[], comparents: number[]): Promise<import("typeorm").InsertResult>;
    getDossiers(): Promise<import("./dossier.entity").DossierEntity[]>;
    getOneDoc(docId: number): Promise<import("./dossier.entity").DossierEntity>;
    updateDoc(docId: number, docTitle: string, docDescription: string, nature: string, libelle: string, dateOuverture: string, dateFermeture: string, NomMaitre: string, biens: number[], comparents: number[]): Promise<import("./dossier.entity").DossierEntity>;
    closeDossier(docId: number): Promise<import("./dossier.entity").DossierEntity>;
    deletDoc(docId: number): Promise<void>;
}
