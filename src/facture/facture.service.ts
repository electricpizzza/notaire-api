import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactureEntity } from './facture.entity';
import { Facture } from './facture.model';
import * as hummus from 'hummus'
import { Inovice } from 'src/inovice';

@Injectable()
export class FactureService {
    constructor(@InjectRepository(FactureEntity) private factureReppository: Repository<FactureEntity>) { }

    async getOneFacture(id: number) {
        const facture = await this.factureReppository.findOne({ where: { id } });
        if (!facture) {
            throw new NotFoundException()
        }
        return facture;
    }

    async getAllFactures() {
        return await this.factureReppository.find();
    }

    async createFacture(facture: Facture) {
        const inovice = new Inovice();
        const link = await inovice.makeInovice("factures", facture.reference, facture.articles, facture.maitre, facture.client, facture.payment, facture.dateFacture, facture.total - facture.remisG);
        facture.link = link;
        return await this.factureReppository.insert(facture);
    }

    async anullerFacture(id: number) {
        return await this.factureReppository.delete(id);
    }
}
