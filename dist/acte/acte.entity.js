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
exports.ActeEntity = void 0;
const bein_entity_1 = require("../bien/bein.entity");
const comparent_entity_1 = require("../comparent/comparent.entity");
const dossier_entity_1 = require("../dossiers/dossier.entity");
const model_entity_1 = require("../model/model.entity");
const model_model_1 = require("../model/model.model");
const typeorm_1 = require("typeorm");
let ActeEntity = class ActeEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("increment"),
    __metadata("design:type", Number)
], ActeEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], ActeEntity.prototype, "libelle", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], ActeEntity.prototype, "redacteur", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", Object)
], ActeEntity.prototype, "contenu", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", Date)
], ActeEntity.prototype, "dateRedaction", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], ActeEntity.prototype, "fichier", void 0);
__decorate([
    typeorm_1.ManyToOne(() => model_entity_1.ModelEntity, model => model.actes),
    __metadata("design:type", model_entity_1.ModelEntity)
], ActeEntity.prototype, "model", void 0);
__decorate([
    typeorm_1.ManyToOne(() => dossier_entity_1.DossierEntity, dossier => dossier.actes),
    __metadata("design:type", dossier_entity_1.DossierEntity)
], ActeEntity.prototype, "dossier", void 0);
ActeEntity = __decorate([
    typeorm_1.Entity()
], ActeEntity);
exports.ActeEntity = ActeEntity;
//# sourceMappingURL=acte.entity.js.map