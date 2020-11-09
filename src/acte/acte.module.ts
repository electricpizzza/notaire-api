import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActeEntity } from './acte.entity';
import { ActeService } from './acte.service';
import { ActeController } from './acte.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ActeEntity])],
  providers: [ActeService],
  controllers: [ActeController]
})
export class ActeModule {}
