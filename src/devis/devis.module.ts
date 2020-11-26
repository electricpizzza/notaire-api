import { Module } from '@nestjs/common';
import { DevisService } from './devis.service';
import { DevisController } from './devis.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviseEntity } from './devis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeviseEntity])],
  providers: [DevisService],
  controllers: [DevisController]
})
export class DevisModule { }
