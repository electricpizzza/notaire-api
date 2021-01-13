import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceEntity } from './service.entity';
import { Service } from './service.model';

@Injectable()
export class ServiceService {
    constructor(@InjectRepository(ServiceEntity) private serviceRepository: Repository<ServiceEntity>) { }


    async getAllServices() {
        return await this.serviceRepository.find();
    }

    async getOneService(id: number) {
        const service = await this.serviceRepository.findOne({ where: { id } });
        if (!service) {
            throw new NotFoundException();
        }
        return service;
    }

    async createService(service: Service) {
        const newService = await this.serviceRepository.insert(service);
        return newService;
    }

    async updateService(service: Service) {
        const newService = await this.serviceRepository.findOne({ where: { id: service.id } });
        if (!newService) {
            throw new NotFoundException();
        }
        // newService.partie = service.partie;
        // newService.libelle = service.libelle;

        return await this.serviceRepository.update(service.id, service)
    }

    async deleteService(id: number) {
        const service = await this.serviceRepository.findOne({ where: { id } });
        if (!service) {
            throw new NotFoundException();
        }
        return this.serviceRepository.delete(id);
    }
}
