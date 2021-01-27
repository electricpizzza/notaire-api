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
exports.BienController = void 0;
const common_1 = require("@nestjs/common");
const bien_model_1 = require("./bien.model");
const bien_service_1 = require("./bien.service");
let BienController = class BienController {
    constructor(bienService) {
        this.bienService = bienService;
    }
    getAllBien() {
        return this.bienService.getAllBien();
    }
    getOneBien(id) {
        return this.bienService.getOneBien(id);
    }
    createBien(libelle, type, description, address, ville, Superficie, detailSuperficie, nb_piece, etage, Immeuble, terrainType, ancfcc, valeur, details, descriptionAr, addressAr, villeAr, detailSuperficieAr, typeAr) {
        const bien = new bien_model_1.Bien(null, libelle, type, description, address, ville, Superficie, detailSuperficie, nb_piece, etage, Immeuble, terrainType, ancfcc, valeur, JSON.stringify(details), typeAr, descriptionAr, addressAr, villeAr, detailSuperficieAr);
        return this.bienService.createBien(bien);
    }
    updateBien(id, libelle, type, description, address, ville, Superficie, detailSuperficie, nb_piece, etage, Immeuble, terrainType, ancfcc, valeur, details, descriptionAr, addressAr, villeAr, detailSuperficieAr, typeAr) {
        const bien = new bien_model_1.Bien(id, libelle, type, description, address, ville, Superficie, detailSuperficie, nb_piece, etage, Immeuble, terrainType, ancfcc, valeur, JSON.stringify(details), typeAr, descriptionAr, addressAr, villeAr, detailSuperficieAr);
        console.log(bien);
        return this.bienService.updateBien(bien);
    }
    deleteBien(id) {
        return this.bienService.deleteBien(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BienController.prototype, "getAllBien", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BienController.prototype, "getOneBien", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('libelle')),
    __param(1, common_1.Body('type')),
    __param(2, common_1.Body('description')),
    __param(3, common_1.Body('address')),
    __param(4, common_1.Body('ville')),
    __param(5, common_1.Body('Superficie')),
    __param(6, common_1.Body('detailSuperficie')),
    __param(7, common_1.Body('nb_piece')),
    __param(8, common_1.Body('etage')),
    __param(9, common_1.Body('Immeuble')),
    __param(10, common_1.Body('terrainType')),
    __param(11, common_1.Body('ancfcc')),
    __param(12, common_1.Body('valeur')),
    __param(13, common_1.Body('details')),
    __param(14, common_1.Body('descriptionAr')),
    __param(15, common_1.Body('addressAr')),
    __param(16, common_1.Body('villeAr')),
    __param(17, common_1.Body('detailSuperficieAr')),
    __param(18, common_1.Body('typeAr')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, Number, Number, String, String, String, Number, Object, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], BienController.prototype, "createBien", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('libelle')),
    __param(2, common_1.Body('type')),
    __param(3, common_1.Body('description')),
    __param(4, common_1.Body('address')),
    __param(5, common_1.Body('ville')),
    __param(6, common_1.Body('Superficie')),
    __param(7, common_1.Body('detailSuperficie')),
    __param(8, common_1.Body('nb_piece')),
    __param(9, common_1.Body('etage')),
    __param(10, common_1.Body('Immeuble')),
    __param(11, common_1.Body('terrainType')),
    __param(12, common_1.Body('ancfcc')),
    __param(13, common_1.Body('valeur')),
    __param(14, common_1.Body('details')),
    __param(15, common_1.Body('descriptionAr')),
    __param(16, common_1.Body('addressAr')),
    __param(17, common_1.Body('villeAr')),
    __param(18, common_1.Body('detailSuperficieAr')),
    __param(19, common_1.Body('typeAr')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, Number, Number, String, String, String, Number, Object, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], BienController.prototype, "updateBien", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BienController.prototype, "deleteBien", null);
BienController = __decorate([
    common_1.Controller('bien'),
    __metadata("design:paramtypes", [bien_service_1.BienService])
], BienController);
exports.BienController = BienController;
//# sourceMappingURL=bien.controller.js.map