import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm'
import { ModelEntity } from './model.entity';
import { Model } from './model.model';


@Injectable()
export class ModelService {
    constructor(
        @InjectRepository(ModelEntity)
        private modelRepository: Repository<ModelEntity>,
    ) { }

    async getAllModels() {
        return await this.modelRepository.find();
    }

    async createModel(model: Model) {
        model.champs = JSON.stringify(model.champs);
        const newmodel = await this.modelRepository.insert(model);
        return newmodel;
    }

    async getOneModel(id: number) {
        const model = await this.modelRepository.find({ where: { id } });
        if (!model) {
            throw new NotFoundException();
        } else
            return model;
    }

}