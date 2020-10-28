import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DossierModule } from './dossiers/dossier.module';
import { ComparentModule } from './comparent/comparent.module';

@Module({
  imports: [
    DossierModule,
    TypeOrmModule.forRoot(),
    ComparentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
