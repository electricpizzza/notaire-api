import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BienEntity } from './bein.entity';

import { BienService } from './bien.service';

@Module({
  imports: [TypeOrmModule.forFeature([BienEntity])],
  providers: [BienService]
})
export class BienModule {}
