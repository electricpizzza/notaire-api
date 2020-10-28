import { Module } from '@nestjs/common';
import { ComparentController } from './comparent.controller';
import { ComparentService } from './comparent.service';

@Module({
  controllers: [ComparentController],
  providers: [ComparentService]
})
export class ComparentModule {}
