import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComparentController } from './comparent.controller';
import { ComparentEntity } from './comparent.entity';
import { ComparentService } from './comparent.service';

@Module({
  imports: [TypeOrmModule.forFeature([ComparentEntity])],
  controllers: [ComparentController],
  providers: [ComparentService]
})
export class ComparentModule {}
