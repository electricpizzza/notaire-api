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
exports.DevisController = void 0;
const common_1 = require("@nestjs/common");
const inovice_1 = require("../inovice");
const devis_model_1 = require("./devis.model");
const devis_service_1 = require("./devis.service");
let DevisController = class DevisController {
    constructor(devisService) {
        this.devisService = devisService;
    }
    getAllDevis() {
        return this.devisService.getAllDevis();
    }
    getOneDevis(id) {
        return this.getOneDevis(id);
    }
    createDevis(termes, dateDevis, client, remisG, total, articles, maitre) {
        const devis = new devis_model_1.Devis(null, termes, dateDevis, client, remisG, total, articles, "Benjelloun");
        const newDevis = this.devisService.createDevis(devis);
        const inovice = new inovice_1.Inovice();
        const link = inovice.makeInovice("devis", 'RKLSD12', devis.articles, "Benjelloun", devis.client, "Espece", devis.dateDevis, devis.total - devis.remisG);
        return { newDevis, link };
    }
    deleteDevis(id) {
        return this.devisService.deletDevis(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DevisController.prototype, "getAllDevis", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevisController.prototype, "getOneDevis", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('termes')),
    __param(1, common_1.Body('dateDevis')),
    __param(2, common_1.Body('client')),
    __param(3, common_1.Body('remisG')),
    __param(4, common_1.Body('total')),
    __param(5, common_1.Body('articles')),
    __param(6, common_1.Body('maitre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Date, Number, Number, Number, Object, String]),
    __metadata("design:returntype", void 0)
], DevisController.prototype, "createDevis", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevisController.prototype, "deleteDevis", null);
DevisController = __decorate([
    common_1.Controller('devis'),
    __metadata("design:paramtypes", [devis_service_1.DevisService])
], DevisController);
exports.DevisController = DevisController;
//# sourceMappingURL=devis.controller.js.map