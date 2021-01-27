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
exports.BanqueEntity = void 0;
const comparent_entity_1 = require("../../comparent.entity");
const typeorm_1 = require("typeorm");
let BanqueEntity = class BanqueEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    typeorm_1.OneToOne(() => comparent_entity_1.ComparentEntity),
    typeorm_1.JoinTable(),
    __metadata("design:type", comparent_entity_1.ComparentEntity)
], BanqueEntity.prototype, "comparent", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "libelle", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "libelleAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "Agence", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "AgenceAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "addresse", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "addresseAr", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "tel", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "ville", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], BanqueEntity.prototype, "villeAr", void 0);
BanqueEntity = __decorate([
    typeorm_1.Entity()
], BanqueEntity);
exports.BanqueEntity = BanqueEntity;
//# sourceMappingURL=banque.entity.js.map