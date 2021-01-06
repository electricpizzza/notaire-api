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
exports.ModelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const model_entity_1 = require("./model.entity");
let ModelService = class ModelService {
    constructor(modelRepository) {
        this.modelRepository = modelRepository;
    }
    async getAllModels() {
        return await this.modelRepository.find();
    }
    async createModel(model) {
        model.champs = JSON.stringify(model.champs);
        const newmodel = await this.modelRepository.insert(model);
        return newmodel;
    }
    async getOneModel(id) {
        const model = await this.modelRepository.find({ where: { id } });
        if (!model) {
            throw new common_1.NotFoundException();
        }
        else
            return model;
    }
    async updateModel(model) {
        const newModel = await this.modelRepository.findOne({ where: { id: model.id } });
        if (!newModel) {
            throw new common_1.NotFoundException();
        }
        newModel.type = model.type;
        newModel.champs = JSON.stringify(model.champs);
        newModel.boilerPlate = model.boilerPlate;
        newModel.redacteur = model.redacteur;
        return await this.modelRepository.update(model.id, newModel);
    }
};
ModelService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(model_entity_1.ModelEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ModelService);
exports.ModelService = ModelService;
//# sourceMappingURL=model.service.js.map