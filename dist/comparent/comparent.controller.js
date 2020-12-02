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
exports.ComparentController = void 0;
const common_1 = require("@nestjs/common");
const comparent_model_1 = require("./comparent.model");
const comparent_service_1 = require("./comparent.service");
const entreprise_model_1 = require("./subcomparent/entreprise/entreprise.model");
const mineur_model_1 = require("./subcomparent/mineur/mineur.model");
const person_phisique_model_1 = require("./subcomparent/person-phisique/person-phisique.model");
let ComparentController = class ComparentController {
    constructor(comparentService) {
        this.comparentService = comparentService;
    }
    getAllComparents() {
        return this.comparentService.getAllComparent();
    }
    creatComparent(type, nom) {
        const comparent = new comparent_model_1.Comparent(0, type, nom, new Date());
        return this.comparentService.createComparent(comparent);
    }
    createEntreprise(raisonSociale, ice, rc, cnss, Adresse, representant, comparent) {
        const entre = new entreprise_model_1.Entreprise(comparent, representant, raisonSociale, ice, rc, cnss, Adresse);
        return this.comparentService.createEntreprise(entre);
    }
    createPerson(nomFr, nomAr, prenomFr, prenomAr, nationalite, fonction, nomPereFr, nomPereAr, nomMereFr, nomMereAr, situation, dateNaissance, nomCompanionFr, nomCompanionAr, typeIdentification, Identification, IdentificationValable, comparent) {
        const person = new person_phisique_model_1.PersonPhisique(comparent.id, nomFr, nomAr, prenomFr, prenomAr, nationalite, fonction, nomPereFr, nomPereAr, nomMereFr, nomMereAr, situation, dateNaissance, nomCompanionFr, nomCompanionAr, typeIdentification, Identification, IdentificationValable);
        return this.comparentService.createPersonne(person);
    }
    createMineur(nomFr, nomAr, prenomFr, prenomAr, nationalite, nomPereFr, nomPereAr, nomMereFr, nomMereAr, dateNaissance, typeIdentification, Identification, IdentificationValable, comparent, tutelle) {
        const mineur = new mineur_model_1.Mineur(comparent, tutelle, nomFr, nomAr, prenomFr, prenomAr, nationalite, nomPereFr, nomPereAr, nomMereFr, nomMereAr, dateNaissance, typeIdentification, Identification, IdentificationValable);
        return this.comparentService.createMineur(mineur);
    }
    getOneComparent(compId) {
        return this.comparentService.getOneComparent(compId);
    }
    updateComparent(compId) {
        return;
    }
    updateEntreprise(comparent, raisonSociale, ice, rc, cnss, Adresse, representant) {
        const entreprise = new entreprise_model_1.Entreprise(comparent, representant, raisonSociale, ice, rc, cnss, Adresse);
        return this.comparentService.updateEntreprise(entreprise);
    }
    updatePerson(comparent, nomFr, nomAr, prenomFr, prenomAr, nationalite, fonction, nomPereFr, nomPereAr, nomMereFr, nomMereAr, situation, dateNaissance, nomCompanionFr, nomCompanionAr, typeIdentification, Identification, IdentificationValable) {
        const person = new person_phisique_model_1.PersonPhisique(comparent, nomFr, nomAr, prenomFr, prenomAr, nationalite, fonction, nomPereFr, nomPereAr, nomMereFr, nomMereAr, situation, dateNaissance, nomCompanionFr, nomCompanionAr, typeIdentification, Identification, IdentificationValable);
        return this.comparentService.updatePerson(person);
    }
    updateMinor(comparent, nomFr, nomAr, prenomFr, prenomAr, nationalite, nomPereFr, nomPereAr, nomMereFr, nomMereAr, dateNaissance, typeIdentification, Identification, IdentificationValable, tutelle) {
        const mineur = new mineur_model_1.Mineur(comparent, tutelle, nomFr, nomAr, prenomFr, prenomAr, nationalite, nomPereFr, nomPereAr, nomMereFr, nomMereAr, dateNaissance, typeIdentification, Identification, IdentificationValable);
        return this.comparentService.updateMinor(mineur);
    }
    deleteComparent(compId) {
        return this.comparentService.deleteComparent(compId);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "getAllComparents", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('type')),
    __param(1, common_1.Body('nom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "creatComparent", null);
__decorate([
    common_1.Post('/entreprise'),
    __param(0, common_1.Body('raisonSociale')),
    __param(1, common_1.Body('ice')),
    __param(2, common_1.Body('rc')),
    __param(3, common_1.Body('cnss')),
    __param(4, common_1.Body('Adresse')),
    __param(5, common_1.Body('representant')),
    __param(6, common_1.Body('comparent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, String, Array, Number]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "createEntreprise", null);
__decorate([
    common_1.Post('/person'),
    __param(0, common_1.Body('nomFr')),
    __param(1, common_1.Body('nomAr')),
    __param(2, common_1.Body('prenomFr')),
    __param(3, common_1.Body('prenomAr')),
    __param(4, common_1.Body('nationalite')),
    __param(5, common_1.Body('fonction')),
    __param(6, common_1.Body('nomPereFr')),
    __param(7, common_1.Body('nomPereAr')),
    __param(8, common_1.Body('nomMereFr')),
    __param(9, common_1.Body('nomMereAr')),
    __param(10, common_1.Body('situation')),
    __param(11, common_1.Body('dateNaissance')),
    __param(12, common_1.Body('nomCompanionFr')),
    __param(13, common_1.Body('nomCompanionAr')),
    __param(14, common_1.Body('typeIdentification')),
    __param(15, common_1.Body('Identification')),
    __param(16, common_1.Body('IdentificationValable')),
    __param(17, common_1.Body('comparent')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String, String, String, String, Date, String, String, String, String, Date,
        comparent_model_1.Comparent]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "createPerson", null);
__decorate([
    common_1.Post('/mineur'),
    __param(0, common_1.Body('nomFr')),
    __param(1, common_1.Body('nomAr')),
    __param(2, common_1.Body('prenomFr')),
    __param(3, common_1.Body('prenomAr')),
    __param(4, common_1.Body('nationalite')),
    __param(5, common_1.Body('nomPereFr')),
    __param(6, common_1.Body('nomPereAr')),
    __param(7, common_1.Body('nomMereFr')),
    __param(8, common_1.Body('nomMereAr')),
    __param(9, common_1.Body('dateNaissance')),
    __param(10, common_1.Body('typeIdentification')),
    __param(11, common_1.Body('Identification')),
    __param(12, common_1.Body('IdentificationValable')),
    __param(13, common_1.Body('comparent')),
    __param(14, common_1.Body('tutelle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String, String, Date, String, String, Date, Number, Number]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "createMineur", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "getOneComparent", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "updateComparent", null);
__decorate([
    common_1.Put('/entreprise/:comparent'),
    __param(0, common_1.Param('comparent')),
    __param(1, common_1.Body('raisonSociale')),
    __param(2, common_1.Body('ice')),
    __param(3, common_1.Body('rc')),
    __param(4, common_1.Body('cnss')),
    __param(5, common_1.Body('Adresse')),
    __param(6, common_1.Body('representant')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Number, String, Array]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "updateEntreprise", null);
__decorate([
    common_1.Put('/person/:comparent'),
    __param(0, common_1.Param('comparent')),
    __param(1, common_1.Body('nomFr')),
    __param(2, common_1.Body('nomAr')),
    __param(3, common_1.Body('prenomFr')),
    __param(4, common_1.Body('prenomAr')),
    __param(5, common_1.Body('nationalite')),
    __param(6, common_1.Body('fonction')),
    __param(7, common_1.Body('nomPereFr')),
    __param(8, common_1.Body('nomPereAr')),
    __param(9, common_1.Body('nomMereFr')),
    __param(10, common_1.Body('nomMereAr')),
    __param(11, common_1.Body('situation')),
    __param(12, common_1.Body('dateNaissance')),
    __param(13, common_1.Body('nomCompanionFr')),
    __param(14, common_1.Body('nomCompanionAr')),
    __param(15, common_1.Body('typeIdentification')),
    __param(16, common_1.Body('Identification')),
    __param(17, common_1.Body('IdentificationValable')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, String, String, String, Date, String, String, String, String, Date]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "updatePerson", null);
__decorate([
    common_1.Put('/mineur/:comparent'),
    __param(0, common_1.Param('comparent')),
    __param(1, common_1.Body('nomFr')),
    __param(2, common_1.Body('nomAr')),
    __param(3, common_1.Body('prenomFr')),
    __param(4, common_1.Body('prenomAr')),
    __param(5, common_1.Body('nationalite')),
    __param(6, common_1.Body('nomPereFr')),
    __param(7, common_1.Body('nomPereAr')),
    __param(8, common_1.Body('nomMereFr')),
    __param(9, common_1.Body('nomMereAr')),
    __param(10, common_1.Body('dateNaissance')),
    __param(11, common_1.Body('typeIdentification')),
    __param(12, common_1.Body('Identification')),
    __param(13, common_1.Body('IdentificationValable')),
    __param(14, common_1.Body('tutelle')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, String, String, String, Date, String, String, Date, Number]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "updateMinor", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ComparentController.prototype, "deleteComparent", null);
ComparentController = __decorate([
    common_1.Controller('comparent'),
    __metadata("design:paramtypes", [comparent_service_1.ComparentService])
], ComparentController);
exports.ComparentController = ComparentController;
//# sourceMappingURL=comparent.controller.js.map