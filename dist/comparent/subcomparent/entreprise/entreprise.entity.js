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
exports.EntrepriseCom = void 0;
const comparent_entity_1 = require("../../comparent.entity");
const comparent_model_1 = require("../../comparent.model");
const typeorm_1 = require("typeorm");
let EntrepriseCom = class EntrepriseCom {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    typeorm_1.OneToOne(() => comparent_entity_1.ComparentEntity),
    typeorm_1.JoinTable(),
    __metadata("design:type", comparent_entity_1.ComparentEntity)
], EntrepriseCom.prototype, "comparent", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], EntrepriseCom.prototype, "raisonSociale", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], EntrepriseCom.prototype, "ice", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], EntrepriseCom.prototype, "rc", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], EntrepriseCom.prototype, "cnss", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], EntrepriseCom.prototype, "Adresse", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Array)
], EntrepriseCom.prototype, "representant", void 0);
EntrepriseCom = __decorate([
    typeorm_1.Entity()
], EntrepriseCom);
exports.EntrepriseCom = EntrepriseCom;
//# sourceMappingURL=entreprise.entity.js.map