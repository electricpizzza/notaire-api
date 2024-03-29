import { DevisService } from './devis.service';
export declare class DevisController {
    private readonly devisService;
    constructor(devisService: DevisService);
    getAllDevis(): Promise<import("./devis.entity").DeviseEntity[]>;
    getDevisCount(): Promise<number>;
    getOneDevis(id: number): Promise<import("./devis.entity").DeviseEntity>;
    createDevis(reference: string, termes: string, dateDevis: Date, client: number, remisG: number, total: number, articles: any, maitre: string, payment: string): Promise<import("typeorm").InsertResult>;
    deleteDevis(id: number): Promise<import("typeorm").DeleteResult>;
}
