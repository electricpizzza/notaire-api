"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActeModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const acte_entity_1 = require("./acte.entity");
const acte_service_1 = require("./acte.service");
const acte_controller_1 = require("./acte.controller");
const model_entity_1 = require("../model/model.entity");
const bein_entity_1 = require("../bien/bein.entity");
const comparent_entity_1 = require("../comparent/comparent.entity");
let ActeModule = class ActeModule {
};
ActeModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([acte_entity_1.ActeEntity, model_entity_1.ModelEntity, bein_entity_1.BienEntity, comparent_entity_1.ComparentEntity])],
        providers: [acte_service_1.ActeService],
        controllers: [acte_controller_1.ActeController]
    })
], ActeModule);
exports.ActeModule = ActeModule;
//# sourceMappingURL=acte.module.js.map