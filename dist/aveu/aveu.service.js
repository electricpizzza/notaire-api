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
exports.AveuService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const aveu_entity_1 = require("./aveu.entity");
let AveuService = class AveuService {
    constructor(aveuRepository) {
        this.aveuRepository = aveuRepository;
    }
    async getAllAveu() {
        return await this.aveuRepository.find();
    }
    async getOneAveu(id) {
        const aveu = await this.aveuRepository.findOne({ where: { id } });
        if (!aveu) {
            throw new common_1.NotFoundException();
        }
        return aveu;
    }
    async createAveu(aveu) {
        return await this.aveuRepository.insert(aveu);
    }
    async updateAveu(aveu) {
        const newAveu = await this.aveuRepository.findOne({ where: { id: aveu.id } });
        if (!newAveu) {
            throw new common_1.NotFoundException();
        }
        return await this.aveuRepository.update(aveu.id, aveu);
    }
    async deleteAveu(id) {
        return await this.aveuRepository.delete(id);
    }
};
AveuService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(aveu_entity_1.AveuEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AveuService);
exports.AveuService = AveuService;
//# sourceMappingURL=aveu.service.js.map