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
        if (!acte) {
            throw new common_1.NotFoundException();
        }
        else
            return acte;
    }
    async getAllActes() {
        return await this.acteRepository.find();
    }
    async createActe(acte) {
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
    async updateActe(acte) {
        const newActe = await this.acteRepository.findOne({ where: { id: acte.id } });
        newActe.libelle = acte.libelle;
        newActe.redacteur = acte.redacteur;
        newActe.contenu = JSON.stringify(acte.contenu);
        newActe.dateRedaction = acte.dateRedaction;
        newActe.fichier = acte.fichier;
        console.log(newActe);
        return await this.acteRepository.update(acte.id, newActe);
    }
    async deleteActe(id) {
        return await this.acteRepository.delete(id);
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