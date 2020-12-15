import { Injectable, NotFoundException } from "@nestjs/common";
import { DossierEntity } from "./dossier.entity";
import { Dossier } from "./dossier.model";

import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";
import { BienEntity } from "src/bien/bein.entity";
import { ComparentEntity } from "src/comparent/comparent.entity";
import { ComptabiliteEntity } from "src/comptabilite/comptabilite.entity";

@Injectable()
export class DossierService {

    constructor(
        @InjectRepository(DossierEntity)
        private dossierRepository: Repository<DossierEntity>,
        @InjectRepository(BienEntity)
        private bienRepository: Repository<BienEntity>,
        @InjectRepository(ComparentEntity)
        private comparentRepository: Repository<ComparentEntity>,
    ) { };

    async inserDossier(dossier: Dossier) {
        const newDoc = await this.dossierRepository.insert(dossier);
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

    async getDocByIdentifiant(identifiant: string) {
        const dossier = await this.dossierRepository.findOne({ where: { identifiant } });
        if (!dossier) {
            throw new NotFoundException("Dossier Introuvable");
        }
        return dossier;
    }

    async searchDoc(libelle?: any, comp?: any) {
        const bien = await this.bienRepository.createQueryBuilder('bien')
            .where("bien.libelle like :libelle", { libelle: `%${libelle}%` })
            .getOne();
        const comparent = await this.comparentRepository.createQueryBuilder("comparent")
            .where("comparent.nom like :nom", { nom: `%${comp}%` })
            .getOne();

        if (!bien || !comparent) {
            throw new NotFoundException();
        }
        const doc = await this.dossierRepository.createQueryBuilder("dossier")
            .where("(dossier.bien like :bien1 or dossier.bien like :bien2 or dossier.bien like :bien3 or dossier.bien like :bien4)"
                , { bien1: `%[${bien.id},%`, bien2: `%[${bien.id}]%`, bien3: `%,${bien.id},%`, bien4: `%,${bien.id}]%` })
            .andWhere("(dossier.comparents like :comparent1 or dossier.comparents like :comparent2 or dossier.comparents like :comparent3 or dossier.comparents like :comparent4)"
                , { comparent1: `%[${comparent.id},%`, comparent2: `%[${comparent.id}]%`, comparent3: `%,${comparent.id},%`, comparent4: `%,${comparent.id}]%` })
            .getMany();

        if (!doc) {
            throw new NotFoundException();
        }
        return doc;
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