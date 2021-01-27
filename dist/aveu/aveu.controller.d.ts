import { AveuService } from './aveu.service';
export declare class AveuController {
    private readonly aveuService;
    constructor(aveuService: AveuService);
    getAll(): Promise<import("./aveu.entity").AveuEntity[]>;
    getOne(id: number): Promise<import("./aveu.entity").AveuEntity>;
    createAveu(comparent: number, bien: number, status: string, partieChp: any, partieStr: string, recu: any): Promise<import("typeorm").InsertResult>;
    updateAveu(id: number, comparent: number, bien: number, status: string, partieChp: any, partieStr: string, recu: any): Promise<import("typeorm").UpdateResult>;
    deleteAveu(id: number): Promise<import("typeorm").DeleteResult>;
}
