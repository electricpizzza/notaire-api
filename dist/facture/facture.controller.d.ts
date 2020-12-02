import { FactureService } from './facture.service';
export declare class FactureController {
    private readonly factureService;
    constructor(factureService: FactureService);
    getOneFacture(id: number): Promise<import("./facture.entity").FactureEntity>;
    getAllFactures(): Promise<import("./facture.entity").FactureEntity[]>;
    createFacture(dossier: number, client: number, description: string, total: number): Promise<import("typeorm").InsertResult>;
    anullerFacture(id: number): any;
}
