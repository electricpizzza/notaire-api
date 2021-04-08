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

    async createActe(acte: Acte, lang:string) {
        // const biens = await this.bienRepository.find();
        let reg;
        let document = await (await this.modelRepository.findOne({ where: { id: acte.model } })).boilerPlate;
        acte.contenu.forEach(contenu => {
            switch (contenu.type) {
                case "comparent":
                    const com =  contenu.value[0];
                    let comparent = "";
                    if (lang == "Fr")      
                        comparent = this.comparentAr(com);
                    else       
                       comparent = this.comparentAr(com);

                    reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");                    
                    document = document.replace(reg, comparent);
                    break;
                case "bien":
                     const bien = contenu.value;
                    reg = new RegExp(`&lt;${contenu.name}&gt;`, "g");
                    if (lang == "Fr")      
                    document = document.replace(`&lt;${contenu.name}&gt;`, this.bienFr(bien));
                    else
                    document = document.replace(`&lt;${contenu.name}&gt;`, this.bienAr(bien));
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
        return await this.acteRepository.update(acte.id, newActe);
    }

    async deleteActe(id: number) {
        return await this.acteRepository.delete(id);
    }


    comparentFr(com){
        let paraComp = `<p>Mr. ${com.nomFr} ${com.nomFr} fils de ${com.nomPereFr} et ${com.nomMereFr}, ${com.fonction}, de nationalité ${com.nationalite}, Né à ${com.lieuxNaissance} le ${com.dateNaissance},Habit a ${com.Adresse} ,`;
        if(com.situation === "marie")
        paraComp += `Marié selon la loi islamique avec ${com.nomCompanionFr}`;
        paraComp +=` Porteur de ${com.typeIdentification ==='CIN'? "Carte Nationale d'Identité":com.typeIdentification} de numéro ${com.Identification}, valable jusqu'à ${com.IdentificationValable}.<p>`;
        return paraComp;
    }
    comparentAr(com){
        const paraCom = '\u202C'+' السيد <br>'+'\u202C'+com.nomAr+' '+'\u202C'+com.prenomAr+
        '\u202C'+' ، من والديه '+'\u202C'+    com.nomPereAr
        +'\u202C'+' و '+'\u202C'+
        com.nomMereAr +'\u202C'+','+'\u202C'+ com.nationaliteAr
        +'\u202C'+'،  الجنسية،  ، المزداد '+'\u202C'+
        com.lieuxNaissanceAr+
        +'\u202C'+'، بتاريخ'+'\u202B'+com.dateNaissance+'\u202C'+
        ' ، المتزوج طبقا للشريعة الإسلامية ودون اتفاق مبرم في إطارالمادة 49 من قانون مدونة الأسرة بالسيدة '+'\u202C'+
        '، والساكن بفاس، '+'\u202C'+
        com.AdresseAr
        +'الحامل لبطاقة التعريف الوطنية رقم '
        +'\u202C'+com.Identification+'\u202C'+
        +' الممتدة صلاحيتها إلى '
        '. '+'\u202B'+
        com.IdentificationValable+
        '';
        //'\u202C'+

        const txtAr = `
        1/- السيد <span> ${com.prenomAr} ${com.nomAr}</span>، من والديه <span>${com.nomPereAr}</span> و <span>${com.nomMereAr}</span>،  <span>${com.nationaliteAr}</span> الجنسية ، <span>${com.fonctionAr}</span>، المزداد <span>${com.lieuxNaissanceAr}</span>، بتاريخ <span>${new Date(com.dateNaissance).toLocaleDateString()}</span>، المتزوج طبقا للشريعة الإسلامية ودون اتفاق مبرم في إطار المادة 49 من قانون مدونة الأسرة بالسيدة <span>${com.nomCompanionAr}</span>، والساكن ب<span>${com.AdresseAr}</span>، .<span>${com.Identification}</span>الحامل لبطاقة التعريف الوطنية رقم `
        console.log(txtAr);
        
        return `<p style="text-align:right;">${txtAr}</p>`;
    }

    bienFr(bien){
        return `<p>La totalité de la propriété situé à ${bien.address} ,${bien.ville} d’une superficie de ${bien.Superficie}, consistant de ${bien.detailSuperficie} . LE TOUT FAISANT L’OBJET DU TITRE FONCIER NUMERO ${bien.libelle} . </p>`
    }

    bienAr(bein){
        return "<p> </p>"
    }

}