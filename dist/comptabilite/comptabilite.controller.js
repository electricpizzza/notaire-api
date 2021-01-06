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
exports.ComptabiliteController = void 0;
const common_1 = require("@nestjs/common");
const comparent_service_1 = require("../comparent/comparent.service");
const comptabilite_model_1 = require("./comptabilite.model");
const comptabilite_service_1 = require("./comptabilite.service");
let ComptabiliteController = class ComptabiliteController {
    constructor(comptabiliteService) {
        this.comptabiliteService = comptabiliteService;
    }
    getAll() {
        return this.comptabiliteService.getAllComptas();
    }
    getOne(id) {
        return this.comptabiliteService.getOneCompta(id);
    }
    getByDossier(dossier) {
        return this.comptabiliteService.getByDossier(dossier);
    }
    createCompta(dossier, description) {
        const com = new comptabilite_model_1.Comptabilite(null, dossier, description);
        return this.comptabiliteService.createCompta(com);
    }
    updateCompta(id, dossier, description) {
        const com = new comptabilite_model_1.Comptabilite(id, dossier, description);
        return this.comptabiliteService.updateCompta(com);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComptabiliteController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComptabiliteController.prototype, "getOne", null);
__decorate([
    common_1.Get('/dossier/:dossier'),
    __param(0, common_1.Param('dossier')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComptabiliteController.prototype, "getByDossier", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('dossier')),
    __param(1, common_1.Body('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ComptabiliteController.prototype, "createCompta", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('dossier')),
    __param(2, common_1.Body('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], ComptabiliteController.prototype, "updateCompta", null);
ComptabiliteController = __decorate([
    common_1.Controller('comptabilite'),
    __metadata("design:paramtypes", [comptabilite_service_1.ComptabiliteService])
], ComptabiliteController);
exports.ComptabiliteController = ComptabiliteController;
//# sourceMappingURL=comptabilite.controller.js.map