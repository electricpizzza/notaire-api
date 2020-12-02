import { BienService } from './bien.service';
export declare class BienController {
    private readonly bienService;
    constructor(bienService: BienService);
    getAllBien(): Promise<import("./bein.entity").BienEntity[]>;
    getOneBien(id: number): Promise<import("./bein.entity").BienEntity>;
    createBien(libelle: string, type: string, description: string, address: string, ville: string, Superficie: string, nb_piece: number, etage: number, Immeuble: string, terrainType: string, ancfcc: string, valeur: number): Promise<import("typeorm").InsertResult>;
    updateBien(id: number, libelle: string, type: string, description: string, address: string, ville: string, Superficie: string, nb_piece: number, etage: number, Immeuble: string, terrainType: string, ancfcc: string, valeur: number): Promise<import("typeorm").UpdateResult>;
    deleteBien(id: number): Promise<import("typeorm").DeleteResult>;
}
