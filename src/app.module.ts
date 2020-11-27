import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DossierModule } from './dossiers/dossier.module';
import { ComparentModule } from './comparent/comparent.module';
import { ActeModule } from './acte/acte.module';
import { ModelService } from './model/model.service';
import { ModelModule } from './model/model.module';
import { BienModule } from './bien/bien.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ArchiveModule } from './archive/archive.module';
import { DevisModule } from './devis/devis.module';
import { FactureModule } from './facture/facture.module';
import { ActionModule } from './action/action.module';

@Module({
  imports: [
    DossierModule,
    TypeOrmModule.forRoot(),
    ComparentModule,
    ActeModule,
    ModelModule,
    BienModule,
    UserModule,
    AuthModule,
    UserModule,
    ArchiveModule,
    DevisModule,
    FactureModule,
    ActionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
