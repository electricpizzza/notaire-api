import { DevisService } from './devis.service';
export declare class DevisController {
    private readonly devisService;
    constructor(devisService: DevisService);
    getAllDevis(): Promise<import("./devis.entity").DeviseEntity[]>;
    getOneDevis(id: number): any;
    createDevis(termes: string, dateDevis: Date, client: number, remisG: number, total: number, articles: any, maitre: string): {
        newDevis: Promise<import("typeorm").InsertResult>;
        link: string;
    };
    deleteDevis(id: number): Promise<import("typeorm").DeleteResult>;
}
