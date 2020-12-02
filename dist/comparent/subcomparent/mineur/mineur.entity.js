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
exports.MineurEntity = void 0;
const comparent_entity_1 = require("../../comparent.entity");
const comparent_model_1 = require("../../comparent.model");
const typeorm_1 = require("typeorm");
let MineurEntity = class MineurEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    typeorm_1.OneToOne(() => comparent_entity_1.ComparentEntity),
    typeorm_1.JoinTable(),
    __metadata("design:type", comparent_entity_1.ComparentEntity)
], MineurEntity.prototype, "comparent", void 0);
__decorate([
    typeorm_1.Column("int"),
    __metadata("design:type", Array)
], MineurEntity.prototype, "tutelle", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "nomFr", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "nomAr", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "prenomFr", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "prenomAr", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "nationalite", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "nomPereFr", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "nomPereAr", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "nomMereFr", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "nomMereAr", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", Date)
], MineurEntity.prototype, "dateNaissance", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "typeIdentification", void 0);
__decorate([
    typeorm_1.Column("text"),
    __metadata("design:type", String)
], MineurEntity.prototype, "Identification", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", Date)
], MineurEntity.prototype, "IdentificationValable", void 0);
MineurEntity = __decorate([
    typeorm_1.Entity()
], MineurEntity);
exports.MineurEntity = MineurEntity;
//# sourceMappingURL=mineur.entity.js.map