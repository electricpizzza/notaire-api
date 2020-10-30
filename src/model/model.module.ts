import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';

@Module({
    imports: [TypeOrmModule.forFeature([ModelEntity])],
    providers: [ModelService]
})
export class ModelModule {}
