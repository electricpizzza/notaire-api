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
exports.PersonPhysiqiueEntity = void 0;
const comparent_entity_1 = require("../../comparent.entity");
const comparent_model_1 = require("../../comparent.model");
const typeorm_1 = require("typeorm");
let PersonPhysiqiueEntity = class PersonPhysiqiueEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    typeorm_1.OneToOne(() => comparent_entity_1.ComparentEntity),
    typeorm_1.JoinTable(),
    __metadata("design:type", comparent_entity_1.ComparentEntity)
], PersonPhysiqiueEntity.prototype, "comparent", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nomFr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nomAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "prenomFr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "prenomAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nationalite", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nationaliteAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "fonction", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "fonctionAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "Adresse", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "AdresseAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nomPereFr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nomPereAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nomMereFr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nomMereAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "situation", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Date)
], PersonPhysiqiueEntity.prototype, "dateNaissance", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "lieuxNaissance", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "lieuxNaissanceAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nomCompanionFr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "nomCompanionAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "typeIdentification", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "Identification", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Date)
], PersonPhysiqiueEntity.prototype, "IdentificationValable", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], PersonPhysiqiueEntity.prototype, "tel", void 0);
PersonPhysiqiueEntity = __decorate([
    typeorm_1.Entity()
], PersonPhysiqiueEntity);
exports.PersonPhysiqiueEntity = PersonPhysiqiueEntity;
//# sourceMappingURL=person-phisique.entity.js.map