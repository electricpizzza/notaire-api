import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BienEntity } from "src/bien/bein.entity";
import { BienService } from "src/bien/bien.service";
import { ComparentEntity } from "src/comparent/comparent.entity";
import { ComparentService } from "src/comparent/comparent.service";
import { EntrepriseCom } from "src/comparent/subcomparent/entreprise/entreprise.entity";
import { MineurEntity } from "src/comparent/subcomparent/mineur/mineur.entity";
import { PersonPhysiqiueEntity } from "src/comparent/subcomparent/person-phisique/person-phisique.entity";
import { DossierController } from "./dossier.controller";
import { DossierEntity } from "./dossier.entity";
import { DossierService } from "./dossier.service";

@Module({
    imports: [TypeOrmModule.forFeature([DossierEntity, ComparentEntity, BienEntity])],
    controllers: [DossierController],
    providers: [DossierService],
})
export class DossierModule {

}
