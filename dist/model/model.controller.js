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
exports.ModelController = void 0;
const common_1 = require("@nestjs/common");
const model_model_1 = require("./model.model");
const model_service_1 = require("./model.service");
let ModelController = class ModelController {
    constructor(modelService) {
        this.modelService = modelService;
    }
    ;
    getAllModels() {
        return this.modelService.getAllModels();
    }
    createModel(language, redacteur, libelle, type, dateRedaction, boilerPlate, champs) {
        const model = new model_model_1.Model(null, language, redacteur, libelle, type, champs, new Date(), boilerPlate);
        return this.modelService.createModel(model);
    }
    getOneModel(id) {
        return this.modelService.getOneModel(id);
    }
    updateModel(id, language, redacteur, libelle, type, boilerPlate, champs) {
        const model = new model_model_1.Model(id, language, redacteur, libelle, type, champs, new Date(), boilerPlate);
        console.log(model);
        return this.modelService.updateModel(model);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "getAllModels", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('language')),
    __param(1, common_1.Body('redacteur')),
    __param(2, common_1.Body('libelle')),
    __param(3, common_1.Body('type')),
    __param(4, common_1.Body('dateRedaction')),
    __param(5, common_1.Body('boilerplate')),
    __param(6, common_1.Body('champs')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Date, Object, Object]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "createModel", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "getOneModel", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('language')),
    __param(2, common_1.Body('redacteur')),
    __param(3, common_1.Body('libelle')),
    __param(4, common_1.Body('type')),
    __param(5, common_1.Body('boilerplate')),
    __param(6, common_1.Body('champs')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, Object, Object]),
    __metadata("design:returntype", void 0)
], ModelController.prototype, "updateModel", null);
ModelController = __decorate([
    common_1.Controller('model'),
    __metadata("design:paramtypes", [model_service_1.ModelService])
], ModelController);
exports.ModelController = ModelController;
//# sourceMappingURL=model.controller.js.map