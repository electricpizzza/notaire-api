import { ServiceService } from './service.service';
export declare class ServiceController {
    private serviceServie;
    constructor(serviceServie: ServiceService);
    getAllServices(): Promise<import("./service.entity").ServiceEntity[]>;
    getOneService(id: number): Promise<import("./service.entity").ServiceEntity>;
    createService(libelle: string, partie: string, type: string, tva: number): Promise<import("typeorm").InsertResult>;
    updateService(id: number, libelle: string, partie: string, type: string, tva: number): Promise<import("typeorm").UpdateResult>;
    deleteService(id: number): any;
}
