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
exports.DevisService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const inovice_1 = require("../inovice");
const typeorm_2 = require("typeorm");
const devis_entity_1 = require("./devis.entity");
let DevisService = class DevisService {
    constructor(devisRepository) {
        this.devisRepository = devisRepository;
    }
    async getAllDevis() {
        return await this.devisRepository.find();
    }
    async getOneDevis(id) {
        return await this.devisRepository.findOne({ where: { id } });
    }
    async createDevis(devis) {
        const inovice = new inovice_1.Inovice();
        devis.link = inovice.makeInovice("devis", devis.reference, devis.articles, devis.maitre, devis.client, devis.payment, devis.dateDevis, devis.total - devis.remisG);
        return await this.devisRepository.insert(devis);
    }
    async updateDevis(devis) {
        const newDevis = await this.devisRepository.findOne({ where: { id: devis.id } });
        if (!newDevis) {
            throw new common_1.NotFoundException();
        }
        newDevis.articles = devis.articles;
        newDevis.dateDevis = devis.dateDevis;
        newDevis.client = devis.client;
        newDevis.remisG = devis.remisG;
        newDevis.termes = devis.termes;
        return await this.devisRepository.update(devis.id, newDevis);
    }
    async deletDevis(id) {
        const newDevis = await this.devisRepository.findOne({ where: { id } });
        if (!newDevis) {
            throw new common_1.NotFoundException();
        }
        return await this.devisRepository.delete(id);
    }
    async getCount() {
        console.log('count');
        const count = await this.devisRepository.createQueryBuilder('devis')
            .where('devis.dateDevis like :date', { date: `%${new Date().getFullYear()}-%` }).getCount();
        return count;
    }
};
DevisService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(devis_entity_1.DeviseEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DevisService);
exports.DevisService = DevisService;
//# sourceMappingURL=devis.service.js.map