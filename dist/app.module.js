"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const dossier_module_1 = require("./dossiers/dossier.module");
const comparent_module_1 = require("./comparent/comparent.module");
const acte_module_1 = require("./acte/acte.module");
const model_module_1 = require("./model/model.module");
const bien_module_1 = require("./bien/bien.module");
const user_module_1 = require("./user/user.module");
const auth_module_1 = require("./auth/auth.module");
const archive_module_1 = require("./archive/archive.module");
const devis_module_1 = require("./devis/devis.module");
const facture_module_1 = require("./facture/facture.module");
const action_module_1 = require("./action/action.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            dossier_module_1.DossierModule,
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                "type": "postgres",
                "host": process.env.DB_HOST,
                "port": Number(process.env.DB_PORT),
                "username": process.env.DB_USERNAME,
                "password": process.env.DB_PASSWORD,
                "database": process.env.DB_DATABASE,
                "entities": ["dist/**/*.entity{.ts,.js}"],
                "logging": true,
                "synchronize": false
            }),
            comparent_module_1.ComparentModule,
            acte_module_1.ActeModule,
            model_module_1.ModelModule,
            bien_module_1.BienModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            archive_module_1.ArchiveModule,
            devis_module_1.DevisModule,
            facture_module_1.FactureModule,
            action_module_1.ActionModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map