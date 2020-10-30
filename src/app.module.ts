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
import { UserController } from './user/user.controller';

@Module({
  imports: [
    DossierModule,
    TypeOrmModule.forRoot(),
    ComparentModule,
    ActeModule,
    ModelModule,
    BienModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, ModelService],
})
export class AppModule {}
