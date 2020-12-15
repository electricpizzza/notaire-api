import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActeEntity } from './acte.entity';
import { ActeService } from './acte.service';
import { ActeController } from './acte.controller';
import { ModelEntity } from 'src/model/model.entity';
import { BienEntity } from 'src/bien/bein.entity';
import { ComparentEntity } from 'src/comparent/comparent.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActeEntity, ModelEntity, BienEntity, ComparentEntity])],
  providers: [ActeService],
  controllers: [ActeController]
})
export class ActeModule { }
