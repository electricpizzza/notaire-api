import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DossierModule } from './dossiers/dossier.module';

@Module({
  imports: [DossierModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
