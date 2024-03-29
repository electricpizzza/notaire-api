import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inovice } from 'src/inovice';
import { Repository } from 'typeorm';
import { DeviseEntity } from './devis.entity';
import { Devis } from './devis.model';


@Injectable()
export class DevisService {
    constructor(@InjectRepository(DeviseEntity) private devisRepository: Repository<DeviseEntity>) { }

    async getAllDevis() {
        return await this.devisRepository.find();
    }

    async getOneDevis(id: number) {
        return await this.devisRepository.findOne({ where: { id } });
    }
    async createDevis(devis: Devis) {

        const inovice = new Inovice()
        devis.link = inovice.makeInovice("devis", devis.reference, devis.articles, devis.maitre, devis.client, devis.payment, devis.dateDevis, devis.total - devis.remisG);
        return await this.devisRepository.insert(devis)
    }

    async updateDevis(devis: Devis) {
        const newDevis = await this.devisRepository.findOne({ where: { id: devis.id } });
        if (!newDevis) {
            throw new NotFoundException()
        }
        newDevis.articles = devis.articles;
        newDevis.dateDevis = devis.dateDevis;
        newDevis.client = devis.client;
        newDevis.remisG = devis.remisG;
        newDevis.termes = devis.termes;


        return await this.devisRepository.update(devis.id, newDevis)
    }


    async deletDevis(id: number) {
        const newDevis = await this.devisRepository.findOne({ where: { id } });
        if (!newDevis) {
            throw new NotFoundException()
        }
        return await this.devisRepository.delete(id)
    }

    async getCount() {
        console.log('count');
        const count = await this.devisRepository.createQueryBuilder('devis')
            .where('devis.dateDevis like :date',
                { date: `%${new Date().getFullYear()}-%` }).getCount();
        return count;
    }
}
