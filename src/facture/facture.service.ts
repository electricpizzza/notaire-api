import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactureEntity } from './facture.entity';
import { Facture } from './facture.model';

@Injectable()
export class FactureService {
    constructor(@InjectRepository(FactureEntity) private factureReppository: Repository<FactureEntity>) { }

    async getOneFacture(id: number) {
        const facture = await this.factureReppository.findOneOrFail({ where: { id } });
        if (!facture) {
            throw new NotFoundException()
        }
        return facture;
    }

    async getAllFactures() {
        return await this.factureReppository.find();
    }

    async createFacture(facture: Facture) {
        return await this.factureReppository.insert(facture);
    }

    async anullerFacture(id: number) {
        return await this.factureReppository.delete(id);
    }
}
