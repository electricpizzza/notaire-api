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
exports.DossierEntity = void 0;
const acte_entity_1 = require("../acte/acte.entity");
const typeorm_1 = require("typeorm");
let DossierEntity = class DossierEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], DossierEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], DossierEntity.prototype, "title", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], DossierEntity.prototype, "description", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], DossierEntity.prototype, "nature", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], DossierEntity.prototype, "libelle", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", String)
], DossierEntity.prototype, "dateOuverture", void 0);
__decorate([
    typeorm_1.Column("date", { nullable: true }),
    __metadata("design:type", String)
], DossierEntity.prototype, "dateFermeture", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], DossierEntity.prototype, "NomMaitre", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", Array)
], DossierEntity.prototype, "comparents", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", Array)
], DossierEntity.prototype, "bien", void 0);
__decorate([
    typeorm_1.OneToMany(() => acte_entity_1.ActeEntity, actes => actes.dossier),
    __metadata("design:type", acte_entity_1.ActeEntity)
], DossierEntity.prototype, "actes", void 0);
DossierEntity = __decorate([
    typeorm_1.Entity()
], DossierEntity);
exports.DossierEntity = DossierEntity;
//# sourceMappingURL=dossier.entity.js.map