import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComptabiliteController } from './comptabilite.controller';
import { ComptabiliteEntity } from './comptabilite.entity';
import { ComptabiliteService } from './comptabilite.service';

@Module({
  imports: [TypeOrmModule.forFeature([ComptabiliteEntity])],
  providers: [ComptabiliteService],
  controllers: [ComptabiliteController]
})
export class ComptabiliteModule { }
