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
exports.DeviseEntity = void 0;
const typeorm_1 = require("typeorm");
let DeviseEntity = class DeviseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], DeviseEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], DeviseEntity.prototype, "termes", void 0);
__decorate([
    typeorm_1.Column('date'),
    __metadata("design:type", Date)
], DeviseEntity.prototype, "dateDevis", void 0);
__decorate([
    typeorm_1.Column('json'),
    __metadata("design:type", Object)
], DeviseEntity.prototype, "client", void 0);
__decorate([
    typeorm_1.Column('real'),
    __metadata("design:type", Number)
], DeviseEntity.prototype, "remisG", void 0);
__decorate([
    typeorm_1.Column('real'),
    __metadata("design:type", Number)
], DeviseEntity.prototype, "total", void 0);
__decorate([
    typeorm_1.Column('json'),
    __metadata("design:type", Object)
], DeviseEntity.prototype, "articles", void 0);
__decorate([
    typeorm_1.Column('text'),
    __metadata("design:type", String)
], DeviseEntity.prototype, "maitre", void 0);
DeviseEntity = __decorate([
    typeorm_1.Entity()
], DeviseEntity);
exports.DeviseEntity = DeviseEntity;
//# sourceMappingURL=devis.entity.js.map