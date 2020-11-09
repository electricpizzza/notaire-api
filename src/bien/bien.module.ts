import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BienEntity } from './bein.entity';

import { BienService } from './bien.service';
import { BienController } from './bien.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BienEntity])],
  providers: [BienService],
  controllers: [BienController]
})
export class BienModule {}
