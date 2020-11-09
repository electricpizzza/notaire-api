import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { ActeEntity } from './acte.entity';
import { Acte } from './acte.model';

@Injectable()
export class ActeService {
    constructor(@InjectRepository(ActeEntity) private acteRepository: Repository<ActeEntity>) { };

    async getOneActe(id: number) {
        const acte = await this.acteRepository.find({ where: { id } })
        if (!acte) {
            throw new NotFoundException()
        } else
            return acte;
    }

    async getAllActes() {
        return await this.acteRepository.find()
    }

    async createActe(acte: Acte) {
        acte.contenu = JSON.stringify(acte.contenu)
        return await this.acteRepository.insert(acte);
    }

}
