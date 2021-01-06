import { FactureService } from './facture.service';
export declare class FactureController {
    private readonly factureService;
    constructor(factureService: FactureService);
    getOneFacture(id: number): Promise<import("./facture.entity").FactureEntity>;
    getAllFactures(): Promise<import("./facture.entity").FactureEntity[]>;
    createFacture(reference: string, termes: string, dateFacture: Date, client: number, remisG: number, total: number, articles: any, maitre: string, payment: string): Promise<import("typeorm").InsertResult>;
    anullerFacture(id: number): any;
}
