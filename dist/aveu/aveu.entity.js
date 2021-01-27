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
exports.AveuEntity = void 0;
const typeorm_1 = require("typeorm");
let AveuEntity = class AveuEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], AveuEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], AveuEntity.prototype, "comparent", void 0);
__decorate([
    typeorm_1.Column('int'),
    __metadata("design:type", Number)
], AveuEntity.prototype, "bien", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], AveuEntity.prototype, "status", void 0);
__decorate([
    typeorm_1.Column('json'),
    __metadata("design:type", Object)
], AveuEntity.prototype, "partieChp", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], AveuEntity.prototype, "partieStr", void 0);
__decorate([
    typeorm_1.Column('json'),
    __metadata("design:type", Object)
], AveuEntity.prototype, "recu", void 0);
AveuEntity = __decorate([
    typeorm_1.Entity()
], AveuEntity);
exports.AveuEntity = AveuEntity;
//# sourceMappingURL=aveu.entity.js.map