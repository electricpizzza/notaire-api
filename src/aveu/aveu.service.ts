import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AveuEntity } from './aveu.entity';
import { Aveu } from './aveu.model';

@Injectable()
export class AveuService {
    constructor(@InjectRepository(AveuEntity) private aveuRepository: Repository<AveuEntity>) { }

    async getAllAveu() {
        return await this.aveuRepository.find();
    }

    async getOneAveu(id: number) {
        const aveu = await this.aveuRepository.findOne({ where: { id } });
        if (!aveu) {
            throw new NotFoundException();
        }
        return aveu;
    }

    async createAveu(aveu: Aveu) {
        return await this.aveuRepository.insert(aveu);
    }

    async updateAveu(aveu: Aveu) {
        const newAveu = await this.aveuRepository.findOne({ where: { id: aveu.id } });
        if (!newAveu) {
            throw new NotFoundException();
        }

        return await this.aveuRepository.update(aveu.id, aveu);
    }

    async deleteAveu(id: number) {
        return await this.aveuRepository.delete(id);
    }
}
