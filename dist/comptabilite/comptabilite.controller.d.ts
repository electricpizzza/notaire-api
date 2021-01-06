import { ComptabiliteService } from './comptabilite.service';
export declare class ComptabiliteController {
    private readonly comptabiliteService;
    constructor(comptabiliteService: ComptabiliteService);
    getAll(): Promise<import("./comptabilite.entity").ComptabiliteEntity[]>;
    getOne(id: number): Promise<import("./comptabilite.entity").ComptabiliteEntity[]>;
    getByDossier(dossier: number): Promise<import("./comptabilite.entity").ComptabiliteEntity[]>;
    createCompta(dossier: number, description: string): Promise<import("typeorm").InsertResult>;
    updateCompta(id: number, dossier: number, description: string): Promise<import("typeorm").UpdateResult>;
}
