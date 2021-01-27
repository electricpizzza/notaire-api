"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveuModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const aveu_controller_1 = require("./aveu.controller");
const aveu_entity_1 = require("./aveu.entity");
const aveu_service_1 = require("./aveu.service");
let AveuModule = class AveuModule {
};
AveuModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([aveu_entity_1.AveuEntity])],
        controllers: [aveu_controller_1.AveuController],
        providers: [aveu_service_1.AveuService]
    })
], AveuModule);
exports.AveuModule = AveuModule;
//# sourceMappingURL=aveu.module.js.map