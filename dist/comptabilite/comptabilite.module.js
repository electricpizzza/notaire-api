"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComptabiliteModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comptabilite_controller_1 = require("./comptabilite.controller");
const comptabilite_entity_1 = require("./comptabilite.entity");
const comptabilite_service_1 = require("./comptabilite.service");
let ComptabiliteModule = class ComptabiliteModule {
};
ComptabiliteModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([comptabilite_entity_1.ComptabiliteEntity])],
        providers: [comptabilite_service_1.ComptabiliteService],
        controllers: [comptabilite_controller_1.ComptabiliteController]
    })
], ComptabiliteModule);
exports.ComptabiliteModule = ComptabiliteModule;
//# sourceMappingURL=comptabilite.module.js.map