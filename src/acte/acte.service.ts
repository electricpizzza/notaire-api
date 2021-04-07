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
        // const biens = await this.bienRepository.find();
        let reg;
        let document = await (await this.modelRepository.findOne({ where: { id: acte.model } })).boilerPlate;
        acte.contenu.forEach(contenu => {
            switch (contenu.type) {
                case "comparent":
                    const com =  contenu.value[0];
                    const comparent = this.comparentFr(com);
                    reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");                    
                    document = document.replace(reg, comparent);
                    break;
                case "bien":
                     const bien = contenu.value;
                    reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");
                    document = document.replace(`&lt;${contenu.name}&gt;`, this.bienFr(bien));
                    break;

                    case "text":
                        reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");
                        document = document.replace(reg, contenu.value);
                        break;
                    case "numero":
                    reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");
                    document = document.replace(reg, contenu.value);
                    break;
            }
        });
        acte.contenu = JSON.stringify(acte.contenu);
        acte.fichier = document;
        //throw new NotFoundException();
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


    comparentFr(com){
        return `<p>Mr. ${com.nomFr} ${com.nomFr} fils de ${com.nomPereFr} et ${com.nomMereFr},de nationalité ${com.nationalite}, ${com.fonction}, Né à ${com.lieuxNaissance} le ${com.dateNaissance},Habit a ${com.Adresse} , Porteur de identite ${com.Identification}, valable jusqu'à ${com.IdentificationValable}.<p>`;
    }
    comparentAr(com){
        return '<p style="text-align:right;">'+
        'السيد '+
         com.nomAr+' '+com.prenomAr
        +' ، من والديه '+
        com.nomPereAr
        +' و '+
        com.nomMereAr +','+ com.nationaliteAr
        +'،  الجنسية،  ، المزداد '+
        com.lieuxNaissanceAr+
        +'، بتاريخ'+
        com.dateNaissance+
        ' ، المتزوج طبقا للشريعة الإسلامية ودون اتفاق مبرم في إطارالمادة 49 من قانون مدونة الأسرة بالسيدة '+
        '، والساكن بفاس، الحامل لبطاقة التعريف الوطنية رقم '
        +com.Identification+
        +' الممتدة صلاحيتها إلى '
        '. '+
        com.IdentificationValable
        '</p>';
    }

    bienFr(bien){
        return `<p>La totalité de la propriété situé à ${bien.address} ,${bien.ville} d’une superficie de ${bien.Superficie}, consistant de ${bien.detailSuperficie} . LE TOUT FAISANT L’OBJET DU TITRE FONCIER NUMERO ${bien.libelle} . </p>`
    }

}