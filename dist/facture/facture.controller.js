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
exports.FactureController = void 0;
const common_1 = require("@nestjs/common");
const inovice_1 = require("../inovice");
const facture_model_1 = require("./facture.model");
const facture_service_1 = require("./facture.service");
let FactureController = class FactureController {
    constructor(factureService) {
        this.factureService = factureService;
    }
    getOneFacture(id) {
        return this.factureService.getOneFacture(id);
    }
    getAllFactures() {
        return this.factureService.getAllFactures();
    }
    createFacture(reference, termes, dateFacture, client, remisG, total, articles, maitre, payment) {
        const facture = new facture_model_1.Facture(null, reference, termes, dateFacture, client, remisG, total, payment, articles, maitre, null);
        const newFacture = this.factureService.createFacture(facture);
        return newFacture;
    }
    anullerFacture(id) {
        return this.anullerFacture(id);
    }
};
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FactureController.prototype, "getOneFacture", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FactureController.prototype, "getAllFactures", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('reference')),
    __param(1, common_1.Body('termes')),
    __param(2, common_1.Body('dateDevis')),
    __param(3, common_1.Body('client')),
    __param(4, common_1.Body('remisG')),
    __param(5, common_1.Body('total')),
    __param(6, common_1.Body('articles')),
    __param(7, common_1.Body('maitre')),
    __param(8, common_1.Body('payment')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Date, Number, Number, Number, Object, String, String]),
    __metadata("design:returntype", void 0)
], FactureController.prototype, "createFacture", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], FactureController.prototype, "anullerFacture", null);
FactureController = __decorate([
    common_1.Controller('facture'),
    __metadata("design:paramtypes", [facture_service_1.FactureService])
], FactureController);
exports.FactureController = FactureController;
//# sourceMappingURL=facture.controller.js.map