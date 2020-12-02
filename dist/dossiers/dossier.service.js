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
let DossierService = class DossierService {
    constructor(dossierRepository) {
        this.dossierRepository = dossierRepository;
    }
    ;
    async inserDossier(dossier) {
        const newDoc = await this.dossierRepository.insert(dossier);
        console.log(newDoc);
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
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DossierService);
exports.DossierService = DossierService;
//# sourceMappingURL=dossier.service.js.map