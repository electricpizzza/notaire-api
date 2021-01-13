import { Repository } from 'typeorm';
import { ServiceEntity } from './service.entity';
import { Service } from './service.model';
export declare class ServiceService {
    private serviceRepository;
    constructor(serviceRepository: Repository<ServiceEntity>);
    getAllServices(): Promise<ServiceEntity[]>;
    getOneService(id: number): Promise<ServiceEntity>;
    createService(service: Service): Promise<import("typeorm").InsertResult>;
    updateService(service: Service): Promise<import("typeorm").UpdateResult>;
    deleteService(id: number): Promise<import("typeorm").DeleteResult>;
}
