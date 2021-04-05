import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { ActeEntity } from './acte.entity';
import { Acte } from './acte.model';
import { ModelEntity } from 'src/model/model.entity';
import { BienEntity } from 'src/bien/bein.entity';
import { ComparentEntity } from 'src/comparent/comparent.entity';

@Injectable()
export class ActeService {
    constructor(
        @InjectRepository(ActeEntity) private acteRepository: Repository<ActeEntity>,
        @InjectRepository(ModelEntity) private modelRepository: Repository<ModelEntity>,
        @InjectRepository(BienEntity) private bienRepository: Repository<BienEntity>,
        @InjectRepository(ComparentEntity) private comparentRepository: Repository<ComparentEntity>,
    ) { };

    async getOneActe(id: number) {
        const acte = await this.acteRepository.find({ where: { id } });
        if (!acte) 
            throw new NotFoundException()
            console.log(acte);
            return acte;
    }

    async getAllActes() {
        return await this.acteRepository.find()
    }

    async createActe(acte: Acte) {

        const comparents = await this.comparentRepository.find();
        const biens = await this.bienRepository.find();
        let reg;
        let document = await (await this.modelRepository.findOne({ where: { id: acte.model } })).boilerPlate;
        acte.contenu.forEach(contenu => {
            switch (contenu.type) {
                case "comparent":
                    const comparent = comparents.find(comp => comp.id = contenu.value[0]);
                    reg = new RegExp(`&lt;${contenu.name}&gt;&lt;NOM&lt;`, "g");
                    document = document.replace(reg, comparent.nom);
                    reg = new RegExp(`&lt;${contenu.name}&gt;&lt;PRENOM&lt;`, "g");
                    document = document.replace(reg, '');
                    break;
                case "bien":
                    const bien = biens.find(b => b.id = contenu.value[0]);
                    reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");
                    document = document.replace(`[${contenu.name}][LIBELLE]`, bien.libelle);
                    break;

                case "text":
                    //reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");
                    reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");
                    console.log(reg, contenu.name);

                    document = document.replace(reg, contenu.value);
                    break;
            }
        });
        acte.contenu = JSON.stringify(acte.contenu);
        acte.fichier = document;
        console.log(document);
        return await this.acteRepository.insert(acte);
    }

    async updateActe(acte: Acte) {
        const newActe = await this.acteRepository.findOne({ where: { id: acte.id } });
        newActe.libelle = acte.libelle;
        newActe.redacteur = acte.redacteur;
        newActe.contenu = JSON.stringify(acte.contenu);
        newActe.dateRedaction = acte.dateRedaction;
        newActe.fichier = acte.fichier;
        console.log(newActe);
        return await this.acteRepository.update(acte.id, newActe);
    }

    async deleteActe(id: number) {
        return await this.acteRepository.delete(id);
    }

}