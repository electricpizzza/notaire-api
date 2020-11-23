import { Module } from '@nestjs/common';
import { ArchiveService } from './archive.service';
import { ArchiveController } from './archive.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArchiveEntity } from './archive.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArchiveEntity])],
  providers: [ArchiveService],
  controllers: [ArchiveController]
})
export class ArchiveModule { }
