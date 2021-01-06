import { Repository } from 'typeorm';
import { ModelEntity } from './model.entity';
import { Model } from './model.model';
export declare class ModelService {
    private modelRepository;
    constructor(modelRepository: Repository<ModelEntity>);
    getAllModels(): Promise<ModelEntity[]>;
    createModel(model: Model): Promise<import("typeorm").InsertResult>;
    getOneModel(id: number): Promise<ModelEntity[]>;
    updateModel(model: Model): Promise<import("typeorm").UpdateResult>;
}
