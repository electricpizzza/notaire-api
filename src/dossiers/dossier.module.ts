import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DossierController } from "./dossier.controller";
import { DossierEntity } from "./dossier.entity";
import { DossierService } from "./dossier.service";

@Module({
    imports: [TypeOrmModule.forFeature([DossierEntity])],
    controllers: [DossierController],
    providers : [DossierService],
})
export class DossierModule {

}
