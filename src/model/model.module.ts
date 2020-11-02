import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelEntity } from './model.entity';
import { ModelService } from './model.service';
import { ModelController } from './model.controller';

@Module({
    imports: [TypeOrmModule.forFeature([ModelEntity])],
    providers: [ModelService],
    controllers: [ModelController]
})
export class ModelModule {}
