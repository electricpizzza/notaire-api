import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DossierModule } from './dossiers/dossier.module';
import { ComparentModule } from './comparent/comparent.module';
import { ActeModule } from './acte/acte.module';
import { ModelModule } from './model/model.module';
import { BienModule } from './bien/bien.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ArchiveModule } from './archive/archive.module';
import { DevisModule } from './devis/devis.module';
import { FactureModule } from './facture/facture.module';
import { ActionModule } from './action/action.module';
import { ConfigModule } from '@nestjs/config';
import { ComptabiliteModule } from './comptabilite/comptabilite.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    DossierModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": process.env.DB_HOST,
      "port": Number(process.env.DB_PORT),
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_DATABASE,
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "logging": true,
      "synchronize": false
    }),
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
    ActionModule,
    ComptabiliteModule,
    TransactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
