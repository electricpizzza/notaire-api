import { Repository } from 'typeorm';
import { AveuEntity } from './aveu.entity';
import { Aveu } from './aveu.model';
export declare class AveuService {
    private aveuRepository;
    constructor(aveuRepository: Repository<AveuEntity>);
    getAllAveu(): Promise<AveuEntity[]>;
    getOneAveu(id: number): Promise<AveuEntity>;
    createAveu(aveu: Aveu): Promise<import("typeorm").InsertResult>;
    updateAveu(aveu: Aveu): Promise<import("typeorm").UpdateResult>;
    deleteAveu(id: number): Promise<import("typeorm").DeleteResult>;
}
