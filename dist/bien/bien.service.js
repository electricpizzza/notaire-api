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
exports.BienService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bein_entity_1 = require("./bein.entity");
let BienService = class BienService {
    constructor(bienRepository) {
        this.bienRepository = bienRepository;
    }
    ;
    async getAllBien() {
        return await this.bienRepository.find();
    }
    async getOneBien(id) {
        const bien = this.bienRepository.findOne({ where: { id } });
        if (!bien) {
            throw new common_1.NotFoundException();
        }
        else
            return bien;
    }
    async createBien(bien) {
        const newBien = await this.bienRepository.insert(bien);
        return newBien;
    }
    async updateBien(bien) {
        const newBien = await this.bienRepository.findOne({ where: { id: bien.id } });
        if (!newBien)
            throw new common_1.NotFoundException();
        newBien.libelle = bien.libelle;
        newBien.type = bien.type;
        newBien.description = bien.description;
        newBien.address = bien.address;
        newBien.ville = bien.ville;
        newBien.Superficie = bien.Superficie;
        newBien.nb_piece = bien.nb_piece;
        newBien.etage = bien.etage;
        newBien.Immeuble = bien.Immeuble;
        newBien.terrainType = bien.terrainType;
        newBien.ancfcc = bien.ancfcc;
        newBien.valeur = bien.valeur;
        return this.bienRepository.update(bien.id, newBien);
    }
    async deleteBien(id) {
        return await this.bienRepository.delete(id);
    }
};
BienService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(bein_entity_1.BienEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BienService);
exports.BienService = BienService;
//# sourceMappingURL=bien.service.js.map