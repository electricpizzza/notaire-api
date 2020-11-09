import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { BienEntity } from './bein.entity';
import { Bien } from './bien.model';

@Injectable()
export class BienService {
    constructor(@InjectRepository(BienEntity) private bienRepository: Repository<BienEntity>) { };

    async getAllBien() {
        return await this.bienRepository.find()
    }

    async getOneBien(id: number) {
        const bien = this.bienRepository.find({ where: { id } })
        if (!bien) {
            throw new NotFoundException()
        } else
            return bien;
    }

    async createBien(bien: Bien) {
        const newBien = await this.bienRepository.insert(bien);
        return newBien;
    }
}
