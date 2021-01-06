"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevisModule = void 0;
const common_1 = require("@nestjs/common");
const devis_service_1 = require("./devis.service");
const devis_controller_1 = require("./devis.controller");
const typeorm_1 = require("@nestjs/typeorm");
const devis_entity_1 = require("./devis.entity");
let DevisModule = class DevisModule {
};
DevisModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([devis_entity_1.DeviseEntity])],
        providers: [devis_service_1.DevisService],
        controllers: [devis_controller_1.DevisController]
    })
], DevisModule);
exports.DevisModule = DevisModule;
//# sourceMappingURL=devis.module.js.map