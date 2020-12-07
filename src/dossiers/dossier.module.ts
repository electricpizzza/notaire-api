import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BienEntity } from "src/bien/bein.entity";
import { ComparentEntity } from "src/comparent/comparent.entity";
import { ComptabiliteEntity } from "src/comptabilite/comptabilite.entity";
import { ComptabiliteService } from "src/comptabilite/comptabilite.service";
import { DossierController } from "./dossier.controller";
import { DossierEntity } from "./dossier.entity";
import { DossierService } from "./dossier.service";

@Module({
    imports: [TypeOrmModule.forFeature([DossierEntity, ComparentEntity, BienEntity, ComptabiliteEntity])],
    controllers: [DossierController],
    providers: [DossierService, ComptabiliteService],
})
export class DossierModule {

}
