import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComparentController } from './comparent.controller';
import { ComparentEntity } from './comparent.entity';
import { ComparentService } from './comparent.service';
import { BanqueEntity } from './subcomparent/banque/banque.entity';
import { EntrepriseCom } from './subcomparent/entreprise/entreprise.entity';
import { MineurEntity } from './subcomparent/mineur/mineur.entity';
import { PersonPhysiqiueEntity } from './subcomparent/person-phisique/person-phisique.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([ComparentEntity]),
    TypeOrmModule.forFeature([EntrepriseCom]),
    TypeOrmModule.forFeature([PersonPhysiqiueEntity]),
    TypeOrmModule.forFeature([MineurEntity]),
    TypeOrmModule.forFeature([BanqueEntity]),
  ],
  controllers: [ComparentController],
  providers: [ComparentService]
})
export class ComparentModule { }
