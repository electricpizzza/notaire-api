import { BadGatewayException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { ActeEntity } from './acte.entity';
import { Acte } from './acte.model';
import { ModelEntity } from 'src/model/model.entity';
import { BienEntity } from 'src/bien/bein.entity';
import { ComparentEntity } from 'src/comparent/comparent.entity';
import moment = require("moment");
import * as fs from 'fs';
var n2words = require('n2words')


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
                        comparent = this.comparentFr(com);
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
        moment.locale('fr');

        const data = fs.readFileSync('assets/data.json', 'utf8');
        let para = JSON.parse(data).actePhrases.comparentFr;
    
        para = para.replace('prenomFr', com.prenomFr);
        para = para.replace('nomFr', com.nomFr);
        para = para.replace('nomPereFr', com.nomPereFr);
        para = para.replace('nomMereFr', com.nomMereFr);
        para = para.replace('fonction', com.fonction);
        para = para.replace('nationalite', com.nationalite);
        para = para.replace('lieuxNaissance', com.lieuxNaissance);
        para = para.replace('dateNaissance', moment(com.dateNaissance).format('LLLL').replace("00:00",""));
        para = para.replace('Adresse', com.Adresse);
        para = para.replace('typeIdentification', com.typeIdentification ==='CIN'? "Carte Nationale d'Identité ":com.typeIdentification);
        para = para.replace('Identification', com.Identification);
        para = para.replace('IdentificationValable', moment(com.IdentificationValable).format('LLLL').replace("00:00",""));
        para = para.replace('situation', com.situation === "marie"? `Marié selon la loi islamique avec ${com.nomCompanionFr}`:'');

        // let paraComp = `<p>Mr. ${com.nomFr} ${com.nomFr} fils de ${com.nomPereFr} et ${com.nomMereFr}, ${com.fonction}, de nationalité ${com.nationalite}, Né à ${com.lieuxNaissance} le ${com.dateNaissance},Habit a ${com.Adresse} ,`;
        // if(com.situation === "marie")
        // paraComp += `Marié selon la loi islamique avec ${com.nomCompanionFr}`;
        // paraComp +=` Porteur de ${com.typeIdentification ==='CIN'? "Carte Nationale d'Identité":com.typeIdentification} de numéro ${com.Identification}, valable jusqu'à ${com.IdentificationValable}.<p>`;
        return para;

        
    }
    comparentAr(com){
        moment.locale('ar-ma');
        const paraCom = `
        السيد <span> ${com.prenomAr} ${com.nomAr}</span>، من والديه <span>${com.nomPereAr}</span> و <span>${com.nomMereAr}</span>،  <span>${com.nationaliteAr}</span> الجنسية ، <span>${com.fonctionAr}</span>، المزداد <span>${com.lieuxNaissanceAr}</span>، بتاريخ <span>${moment(com.dateNaissance).format('LLLL').replace("00:00","")}</span>،${com.situation !== "marie"?``:` المتزوج طبقا للشريعة الإسلامية ودون اتفاق مبرم في إطار المادة 49 من قانون مدونة الأسرة بالسيدة <span>${com.nomCompanionAr}</span>،`} والساكن ب<span>${com.AdresseAr}</span>، الحامل لبطاقة التعريف الوطنية رقم <span>${'\u202B'+com.Identification}</span> الممتدة صلاحيتها إلى . <span>${'\u202B'+moment(com.IdentificationValable).format('LLLL').replace("00:00","")}</span>`

        return paraCom;
    }

    bienFr(bien){
        const data = fs.readFileSync('assets/data.json', 'utf8');
        let para = JSON.parse(data).actePhrases.bineFr;
    
        para = para.replace('address', bien.address);
        para = para.replace('ville', bien.ville);
        para = para.replace('Superficie', bien.Superficie);
        para = para.replace('detailSuperficie', bien.detailSuperficie);
        para = para.replace('libelle', bien.libelle);

        return para
    }

    bienAr(bien){
        const parabien = `
        الملك المسمى "  ${bien.descriptionAr}  "، الكائن ب${bien.addressAr}، والمتكون من ${bien.detailSuperficieAr}، مساحتها ${bien.Superficie} المقيدة بالمحافظة العقارية ب${bien.villeAr}، موضوع الرسم العقاري رقم ${bien.libelle}، مع كل ما تضم من جميع المنافع والمرافق دون استثناء و لا تحفظ.
        `
        const ext =`مجموع الملك المسمى " ${bien.descriptionAr} " الكاىن ب${bien.addressAr}، موضوع موضوع الرسم العقاري رقم ${bien.libelle} ،المشتمل على :   <br> <b style="text-decoration: underline">القسمة المفرزة</b> : <br>
        شقة متكونة من الجزء المفرز, مساحتها <b>${n2words(Number(bien.Superficie),{lang: 'ar'})} متر مربع ( ${bien.Superficie} م²) <b>"، الكائن ب ${bien.addressAr} والمتكون من ${bien.detailSuperficieAr} ب${bien.addressAr} المقيدة بالمحافظة العقارية ${bien.villeAr} ،  مع كل ما تضم من جميع المنافع والمرافق دون استثناء و لا تحفظ. <br> <b style="text-decoration: underline">الأجزاء المشتركة</b>: <br> (مليمات ) غير شائعة للأجزاء المشتركة للعقار الأصلي موضوع الرسم العقاري رقم ${bien.libelle} ،`

        return ext;
    }

}