import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ComptabiliteEntity } from './comptabilite.entity';
import { Comptabilite } from './comptabilite.model';

@Injectable()
export class ComptabiliteService {
    constructor(@InjectRepository(ComptabiliteEntity) private compatabilitRepository: Repository<ComptabiliteEntity>) { }

    async getAllComptas() {
        return await this.compatabilitRepository.find();
    }

    async getOneCompta(id: number) {
        const com = await this.compatabilitRepository.find({ where: { id } });
        if (!com) {
            throw new NotFoundException();
        }
        return com;
    }


    async getByDossier(dossier: number) {
        const com = await this.compatabilitRepository.find({ where: { dossier } });
        if (!com) {
            throw new NotFoundException();
        }
        return com;
    }

    async createCompta(compta: Comptabilite) {
        return await this.compatabilitRepository.insert(compta);
    }

    async updateCompta(compt: Comptabilite) {
        const com = await this.compatabilitRepository.find({ where: { id: compt.id } });
        if (!com) {
            throw new NotFoundException();
        }
        return await this.compatabilitRepository.update(compt.id, compt)
    }

}
