import { Injectable, NotFoundException } from "@nestjs/common";
import { DossierEntity } from "./dossier.entity";
import { Dossier } from "./dossier.model";

import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DossierService {

    constructor(
        @InjectRepository(DossierEntity)
        private dossierRepository: Repository<DossierEntity>,
    ) { };

    async inserDossier(dossier: Dossier) {
        // {
        //     title: dossier.title,
        //     description: dossier.description,
        //     nature: dossier.nature,
        //     libelle: dossier.libelle,
        //     dateOuverture: dossier.dateOuverture,
        //     dateFermeture: dossier.dateFermeture,
        //     NomMaitre: dossier.NomMaitre,
        //     bien: dossier.bien,
        //     comparents: dossier.comparents.toString
        // }
        const newDoc = await this.dossierRepository.insert(dossier);
        console.log(newDoc);

        return newDoc;
    }

    async getDocs() {
        return await this.dossierRepository.find();
    }

    async getOneDossier(id: number) {
        const dossier = await this.dossierRepository.findOne({ where: { id } });
        if (!dossier) {
            throw new NotFoundException("Dossier Introuvable");
        }
        return dossier;
    }

    async updateDossier(id: number, title: string, description: string) {
        const dossier = await this.dossierRepository.findOne({ where: { id } });
        if (!dossier) {
            throw new NotFoundException("Dossier Introuvable");

        }
        dossier.title = title;
        dossier.description = description;
        this.dossierRepository.save(dossier);

        return dossier;
    }

    async deletDossier(id: number) {
        this.dossierRepository.delete(id)
    }
}