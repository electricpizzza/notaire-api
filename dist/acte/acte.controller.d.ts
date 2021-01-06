import { ActeService } from './acte.service';
export declare class ActeController {
    private readonly acteService;
    constructor(acteService: ActeService);
    getAllActes(): Promise<import("./acte.entity").ActeEntity[]>;
    getOneActe(id: number): Promise<import("./acte.entity").ActeEntity[]>;
    createActe(libelle: string, redacteur: string, contenu: any, dateRedaction: Date, fichier: string, dossierId: any, model: any): Promise<import("typeorm").InsertResult>;
    updateActe(id: number, libelle: string, redacteur: string, contenu: any, dateRedaction: Date, fichier: string, model: any): Promise<import("typeorm").UpdateResult>;
    deleteActe(id: number): Promise<import("typeorm").DeleteResult>;
}
