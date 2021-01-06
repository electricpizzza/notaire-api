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
exports.DossierController = void 0;
const common_1 = require("@nestjs/common");
const dossier_model_1 = require("./dossier.model");
const dossier_service_1 = require("./dossier.service");
const comparent_service_1 = require("../comparent/comparent.service");
const bien_service_1 = require("../bien/bien.service");
const comptabilite_service_1 = require("../comptabilite/comptabilite.service");
const comptabilite_model_1 = require("../comptabilite/comptabilite.model");
let DossierController = class DossierController {
    constructor(dossierServeice, comptabiliteService) {
        this.dossierServeice = dossierServeice;
        this.comptabiliteService = comptabiliteService;
    }
    ;
    async addDossier(docTitle, identifiant, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, biens, comparents) {
        const doc = new dossier_model_1.Dossier(null, identifiant, docTitle, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, comparents, biens);
        const newDoc = await this.dossierServeice.inserDossier(doc);
        const compta = new comptabilite_model_1.Comptabilite(newDoc.identifiers[0].id, newDoc.identifiers[0].id, docTitle + docDescription);
        const comp = await this.comptabiliteService.createCompta(compta);
        return newDoc;
    }
    getDossiers(query) {
        if (query.dossier)
            return this.dossierServeice.getDocByIdentifiant(query.dossier);
        if (query.comp && query.bien) {
            const doc = this.dossierServeice.searchDoc(query.bien, query.comp);
            return doc;
        }
        const allDocs = this.dossierServeice.getDocs();
        return allDocs;
    }
    getOneDoc(docId) {
        const dossier = this.dossierServeice.getOneDossier(docId);
        return dossier;
    }
    updateDoc(docId, docTitle, identifiant, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, biens, comparents) {
        const dossier = new dossier_model_1.Dossier(docId, identifiant, docTitle, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, comparents, biens);
        return this.dossierServeice.updateDossier(dossier);
        ;
    }
    closeDossier(docId) {
        return this.dossierServeice.closeDossier(docId);
    }
    deletDoc(docId) {
        return this.dossierServeice.deletDossier(docId);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('title')), __param(1, common_1.Body('identifiant')), __param(2, common_1.Body('description')),
    __param(3, common_1.Body('nature')), __param(4, common_1.Body('libelle')), __param(5, common_1.Body('dateOuverture')),
    __param(6, common_1.Body('dateFermeture')), __param(7, common_1.Body('NomMaitre')),
    __param(8, common_1.Body('Bien')), __param(9, common_1.Body('Comparent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String, Array, Array]),
    __metadata("design:returntype", Promise)
], DossierController.prototype, "addDossier", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "getDossiers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "getOneDoc", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('title')), __param(2, common_1.Body('identifiant')), __param(3, common_1.Body('description')),
    __param(4, common_1.Body('nature')), __param(5, common_1.Body('libelle')), __param(6, common_1.Body('dateOuverture')),
    __param(7, common_1.Body('dateFermeture')), __param(8, common_1.Body('NomMaitre')),
    __param(9, common_1.Body('Bien')), __param(10, common_1.Body('Comparent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, Array, Array]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "updateDoc", null);
__decorate([
    common_1.Put('/close/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "closeDossier", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DossierController.prototype, "deletDoc", null);
DossierController = __decorate([
    common_1.Controller('dossiers'),
    __metadata("design:paramtypes", [dossier_service_1.DossierService,
        comptabilite_service_1.ComptabiliteService])
], DossierController);
exports.DossierController = DossierController;
//# sourceMappingURL=dossier.controller.js.map