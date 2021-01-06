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
exports.DossierService = void 0;
const common_1 = require("@nestjs/common");
const dossier_entity_1 = require("./dossier.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const bein_entity_1 = require("../bien/bein.entity");
const comparent_entity_1 = require("../comparent/comparent.entity");
const comptabilite_entity_1 = require("../comptabilite/comptabilite.entity");
let DossierService = class DossierService {
    constructor(dossierRepository, bienRepository, comparentRepository) {
        this.dossierRepository = dossierRepository;
        this.bienRepository = bienRepository;
        this.comparentRepository = comparentRepository;
    }
    ;
    async inserDossier(dossier) {
        const newDoc = await this.dossierRepository.insert(dossier);
        return newDoc;
    }
    async getDocs() {
        return await this.dossierRepository.find();
    }
    async getOneDossier(id) {
        const dossier = await this.dossierRepository.findOne({ where: { id } });
        if (!dossier) {
            throw new common_1.NotFoundException("Dossier Introuvable");
        }
        return dossier;
    }
    async getDocByIdentifiant(identifiant) {
        const dossier = await this.dossierRepository.findOne({ where: { identifiant } });
        if (!dossier) {
            throw new common_1.NotFoundException("Dossier Introuvable");
        }
        return dossier;
    }
    async searchDoc(libelle, comp) {
        const bien = await this.bienRepository.createQueryBuilder('bien')
            .where("bien.libelle like :libelle", { libelle: `%${libelle}%` })
            .getOne();
        const comparent = await this.comparentRepository.createQueryBuilder("comparent")
            .where("comparent.nom like :nom", { nom: `%${comp}%` })
            .getOne();
        if (!bien || !comparent) {
            throw new common_1.NotFoundException();
        }
        const doc = await this.dossierRepository.createQueryBuilder("dossier")
            .where("(dossier.bien like :bien1 or dossier.bien like :bien2 or dossier.bien like :bien3 or dossier.bien like :bien4)", { bien1: `%[${bien.id},%`, bien2: `%[${bien.id}]%`, bien3: `%,${bien.id},%`, bien4: `%,${bien.id}]%` })
            .andWhere("(dossier.comparents like :comparent1 or dossier.comparents like :comparent2 or dossier.comparents like :comparent3 or dossier.comparents like :comparent4)", { comparent1: `%[${comparent.id},%`, comparent2: `%[${comparent.id}]%`, comparent3: `%,${comparent.id},%`, comparent4: `%,${comparent.id}]%` })
            .getMany();
        if (!doc) {
            throw new common_1.NotFoundException();
        }
        return doc;
    }
    async updateDossier(doc) {
        const dossier = await this.dossierRepository.findOne({ where: { id: doc.id } });
        if (!dossier) {
            throw new common_1.NotFoundException("Dossier Introuvable");
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
    async deletDossier(id) {
        this.dossierRepository.delete(id);
    }
    async closeDossier(id) {
        const newDossier = await this.dossierRepository.findOne({ where: { id } });
        if (!newDossier)
            throw new common_1.NotFoundException();
        else {
            const today = new Date();
            newDossier.dateFermeture = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
            this.dossierRepository.save(newDossier);
        }
        return newDossier;
    }
};
DossierService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(dossier_entity_1.DossierEntity)),
    __param(1, typeorm_2.InjectRepository(bein_entity_1.BienEntity)),
    __param(2, typeorm_2.InjectRepository(comparent_entity_1.ComparentEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], DossierService);
exports.DossierService = DossierService;
//# sourceMappingURL=dossier.service.js.map