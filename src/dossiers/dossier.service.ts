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

    async updateDossier(doc: Dossier) {
        const dossier = await this.dossierRepository.findOne({ where: { id: doc.id } });
        if (!dossier) {
            throw new NotFoundException("Dossier Introuvable");

        }
        dossier.title = doc.title;
        dossier.description = doc.description;
        dossier.nature = doc.nature;
        dossier.libelle = doc.libelle;
        dossier.dateOuverture = doc.dateOuverture;
        dossier.dateFermeture = doc.dateFermeture;
        dossier.NomMaitre = doc.NomMaitre;
        dossier.comparents = doc.comparents;
        dossier.bien = doc.bien;

        this.dossierRepository.save(dossier);

        return dossier;
    }

    async deletDossier(id: number) {
        this.dossierRepository.delete(id)
    }


    async closeDossier(id: number) {
        const newDossier = await this.dossierRepository.findOne({ where: { id } })
        if (!newDossier)
            throw new NotFoundException()
        else {
            const today = new Date();
            newDossier.dateFermeture = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
            this.dossierRepository.save(newDossier);
        }
        return newDossier;
    }
}