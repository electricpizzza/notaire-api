import { Repository } from 'typeorm';
import { BienEntity } from './bein.entity';
import { Bien } from './bien.model';
export declare class BienService {
    private bienRepository;
    constructor(bienRepository: Repository<BienEntity>);
    getAllBien(): Promise<BienEntity[]>;
    getOneBien(id: number): Promise<BienEntity>;
    getBienByLibelle(libelle: string): Promise<number>;
    createBien(bien: Bien): Promise<import("typeorm").InsertResult>;
    updateBien(bien: Bien): Promise<import("typeorm").UpdateResult>;
    deleteBien(id: number): Promise<import("typeorm").DeleteResult>;
}
