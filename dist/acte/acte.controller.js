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
exports.ActeController = void 0;
const common_1 = require("@nestjs/common");
const acte_model_1 = require("./acte.model");
const acte_service_1 = require("./acte.service");
let ActeController = class ActeController {
    constructor(acteService) {
        this.acteService = acteService;
    }
    getAllActes() {
        return this.acteService.getAllActes();
    }
    getOneActe(id) {
        return this.acteService.getOneActe(id);
    }
    createActe(libelle, redacteur, contenu, dateRedaction, fichier, dossierId, model) {
        const acte = new acte_model_1.Acte(null, libelle, redacteur, contenu, new Date(), fichier, model);
        return this.acteService.createActe(acte);
    }
    updateActe(id, libelle, redacteur, contenu, dateRedaction, fichier, model) {
        const acte = new acte_model_1.Acte(id, libelle, redacteur, contenu, dateRedaction, fichier, model);
        return this.acteService.updateActe(acte);
    }
    deleteActe(id) {
        return this.acteService.deleteActe(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActeController.prototype, "getAllActes", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActeController.prototype, "getOneActe", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('libelle')),
    __param(1, common_1.Body('redacteur')),
    __param(2, common_1.Body('contenu')),
    __param(3, common_1.Body('dateRedaction')),
    __param(4, common_1.Body('fichier')),
    __param(5, common_1.Body('dossierId')),
    __param(6, common_1.Body('model')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object, Date, String, Object, Object]),
    __metadata("design:returntype", void 0)
], ActeController.prototype, "createActe", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('libelle')),
    __param(2, common_1.Body('redacteur')),
    __param(3, common_1.Body('contenu')),
    __param(4, common_1.Body('dateRedaction')),
    __param(5, common_1.Body('fichier')),
    __param(6, common_1.Body('dossierId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, Object, Date, String, Object]),
    __metadata("design:returntype", void 0)
], ActeController.prototype, "updateActe", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ActeController.prototype, "deleteActe", null);
ActeController = __decorate([
    common_1.Controller('actes'),
    __metadata("design:paramtypes", [acte_service_1.ActeService])
], ActeController);
exports.ActeController = ActeController;
//# sourceMappingURL=acte.controller.js.map