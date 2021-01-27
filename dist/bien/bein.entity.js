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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BienEntity = void 0;
const acte_entity_1 = require("../acte/acte.entity");
const typeorm_1 = require("typeorm");
let BienEntity = class BienEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], BienEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "libelle", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "type", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "address", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "ville", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "Superficie", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "detailSuperficie", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], BienEntity.prototype, "nb_piece", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], BienEntity.prototype, "etage", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "Immeuble", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "terrainType", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "ancfcc", void 0);
__decorate([
    typeorm_1.Column('real'),
    __metadata("design:type", Number)
], BienEntity.prototype, "valeur", void 0);
__decorate([
    typeorm_1.Column('json'),
    __metadata("design:type", Object)
], BienEntity.prototype, "details", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "typeAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "descriptionAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "addressAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "villeAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BienEntity.prototype, "detailSuperficieAr", void 0);
BienEntity = __decorate([
    typeorm_1.Entity()
], BienEntity);
exports.BienEntity = BienEntity;
//# sourceMappingURL=bein.entity.js.map