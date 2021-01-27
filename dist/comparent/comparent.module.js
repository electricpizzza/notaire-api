"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comparent_controller_1 = require("./comparent.controller");
const comparent_entity_1 = require("./comparent.entity");
const comparent_service_1 = require("./comparent.service");
const banque_entity_1 = require("./subcomparent/banque/banque.entity");
const entreprise_entity_1 = require("./subcomparent/entreprise/entreprise.entity");
const mineur_entity_1 = require("./subcomparent/mineur/mineur.entity");
const person_phisique_entity_1 = require("./subcomparent/person-phisique/person-phisique.entity");
let ComparentModule = class ComparentModule {
};
ComparentModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([comparent_entity_1.ComparentEntity]),
            typeorm_1.TypeOrmModule.forFeature([entreprise_entity_1.EntrepriseCom]),
            typeorm_1.TypeOrmModule.forFeature([person_phisique_entity_1.PersonPhysiqiueEntity]),
            typeorm_1.TypeOrmModule.forFeature([mineur_entity_1.MineurEntity]),
            typeorm_1.TypeOrmModule.forFeature([banque_entity_1.BanqueEntity]),
        ],
        controllers: [comparent_controller_1.ComparentController],
        providers: [comparent_service_1.ComparentService]
    })
], ComparentModule);
exports.ComparentModule = ComparentModule;
//# sourceMappingURL=comparent.module.js.map