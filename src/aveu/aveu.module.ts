import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AveuController } from './aveu.controller';
import { AveuEntity } from './aveu.entity';
import { AveuService } from './aveu.service';

@Module({
  imports: [TypeOrmModule.forFeature([AveuEntity])],
  controllers: [AveuController],
  providers: [AveuService]
})
export class AveuModule { }
