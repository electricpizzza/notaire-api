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
        const bien = this.bienRepository.findOne({ where: { id } })
        if (!bien) {
            throw new NotFoundException()
        } else
            return bien;
    }

    async getBienByLibelle(libelle: string) {
        const bien = await this.bienRepository.createQueryBuilder('bien')
            .where("bien.libelle like :libelle", { libelle: `%${libelle}%` })
            .getOne();
        return bien.id;
    }

    async createBien(bien: Bien) {
        const newBien = await this.bienRepository.insert(bien);
        return newBien;
    }

    async updateBien(bien: Bien) {
        const newBien = await this.bienRepository.findOne({ where: { id: bien.id } })
        if (!newBien)
            throw new NotFoundException();

        newBien.libelle = bien.libelle;
        newBien.type = bien.type;
        newBien.description = bien.description;
        newBien.address = bien.address;
        newBien.ville = bien.ville;
        newBien.Superficie = bien.Superficie;
        newBien.nb_piece = bien.nb_piece;
        newBien.etage = bien.etage;
        newBien.Immeuble = bien.Immeuble;
        newBien.terrainType = bien.terrainType;
        newBien.ancfcc = bien.ancfcc;
        newBien.valeur = bien.valeur;

        return this.bienRepository.update(bien.id, newBien);
    }

    async deleteBien(id: number) {
        return await this.bienRepository.delete(id);
    }
}
