import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActeEntity } from './acte.entity';
import { ActeService } from './acte.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActeEntity])],
  providers: [ActeService]
})
export class ActeModule {}
