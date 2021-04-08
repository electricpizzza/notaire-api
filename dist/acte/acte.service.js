"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const acte_entity_1 = require("./acte.entity");
const model_entity_1 = require("../model/model.entity");
const bein_entity_1 = require("../bien/bein.entity");
const comparent_entity_1 = require("../comparent/comparent.entity");
let ActeService = class ActeService {
    constructor(acteRepository, modelRepository, bienRepository, comparentRepository) {
        this.acteRepository = acteRepository;
        this.modelRepository = modelRepository;
        this.bienRepository = bienRepository;
        this.comparentRepository = comparentRepository;
    }
    ;
    async getOneActe(id) {
        const acte = await this.acteRepository.find({ where: { id } });
        if (!acte)
            throw new common_1.NotFoundException();
        console.log(acte);
        return acte;
    }
    async getAllActes() {
        return await this.acteRepository.find();
    }
    async createActe(acte, lang) {
        let reg;
        let document = await (await this.modelRepository.findOne({ where: { id: acte.model } })).boilerPlate;
        acte.contenu.forEach(contenu => {
            switch (contenu.type) {
                case "comparent":
                    const com = contenu.value[0];
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
        return await this.acteRepository.insert(acte);
    }
    async updateActe(acte) {
        const newActe = await this.acteRepository.findOne({ where: { id: acte.id } });
        newActe.libelle = acte.libelle;
        newActe.redacteur = acte.redacteur;
        newActe.contenu = JSON.stringify(acte.contenu);
        newActe.dateRedaction = acte.dateRedaction;
        newActe.fichier = acte.fichier;
        return await this.acteRepository.update(acte.id, newActe);
    }
    async deleteActe(id) {
        return await this.acteRepository.delete(id);
    }
    comparentFr(com) {
        let paraComp = `<p>Mr. ${com.nomFr} ${com.nomFr} fils de ${com.nomPereFr} et ${com.nomMereFr}, ${com.fonction}, de nationalité ${com.nationalite}, Né à ${com.lieuxNaissance} le ${com.dateNaissance},Habit a ${com.Adresse} ,`;
        if (com.situation === "marie")
            paraComp += `Marié selon la loi islamique avec ${com.nomCompanionFr}`;
        paraComp += ` Porteur de ${com.typeIdentification === 'CIN' ? "Carte Nationale d'Identité" : com.typeIdentification} de numéro ${com.Identification}, valable jusqu'à ${com.IdentificationValable}.<p>`;
        return paraComp;
    }
    comparentAr(com) {
        const paraCom = '\u202C' + ' السيد <br>' + '\u202C' + com.nomAr + ' ' + '\u202C' + com.prenomAr +
            '\u202C' + ' ، من والديه ' + '\u202C' + com.nomPereAr
            + '\u202C' + ' و ' + '\u202C' +
            com.nomMereAr + '\u202C' + ',' + '\u202C' + com.nationaliteAr
            + '\u202C' + '،  الجنسية،  ، المزداد ' + '\u202C' +
            com.lieuxNaissanceAr +
            +'\u202C' + '، بتاريخ' + '\u202B' + com.dateNaissance + '\u202C' +
            ' ، المتزوج طبقا للشريعة الإسلامية ودون اتفاق مبرم في إطارالمادة 49 من قانون مدونة الأسرة بالسيدة ' + '\u202C' +
            '، والساكن بفاس، ' + '\u202C' +
            com.AdresseAr
            + 'الحامل لبطاقة التعريف الوطنية رقم '
            + '\u202C' + com.Identification + '\u202C' +
            +' الممتدة صلاحيتها إلى ';
        '. ' + '\u202B' +
            com.IdentificationValable +
            '';
        const txtAr = `
        1/- السيد <span> ${com.prenomAr} ${com.nomAr}</span>، من والديه <span>${com.nomPereAr}</span> و <span>${com.nomMereAr}</span>،  <span>${com.nationaliteAr}</span> الجنسية ، <span>${com.fonctionAr}</span>، المزداد <span>${com.lieuxNaissanceAr}</span>، بتاريخ <span>${new Date(com.dateNaissance).toLocaleDateString()}</span>، المتزوج طبقا للشريعة الإسلامية ودون اتفاق مبرم في إطار المادة 49 من قانون مدونة الأسرة بالسيدة <span>${com.nomCompanionAr}</span>، والساكن ب<span>${com.AdresseAr}</span>، .<span>${com.Identification}</span>الحامل لبطاقة التعريف الوطنية رقم `;
        console.log(txtAr);
        return `<p style="text-align:right;">${txtAr}</p>`;
    }
    bienFr(bien) {
        return `<p>La totalité de la propriété situé à ${bien.address} ,${bien.ville} d’une superficie de ${bien.Superficie}, consistant de ${bien.detailSuperficie} . LE TOUT FAISANT L’OBJET DU TITRE FONCIER NUMERO ${bien.libelle} . </p>`;
    }
    bienAr(bein) {
        return "<p> </p>";
    }
};
ActeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(acte_entity_1.ActeEntity)),
    __param(1, typeorm_2.InjectRepository(model_entity_1.ModelEntity)),
    __param(2, typeorm_2.InjectRepository(bein_entity_1.BienEntity)),
    __param(3, typeorm_2.InjectRepository(comparent_entity_1.ComparentEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], ActeService);
exports.ActeService = ActeService;
//# sourceMappingURL=acte.service.js.map