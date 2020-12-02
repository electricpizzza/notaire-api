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
let ActeService = class ActeService {
    constructor(acteRepository) {
        this.acteRepository = acteRepository;
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
        acte.contenu = JSON.stringify(acte.contenu);
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
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ActeService);
exports.ActeService = ActeService;
//# sourceMappingURL=acte.service.js.map