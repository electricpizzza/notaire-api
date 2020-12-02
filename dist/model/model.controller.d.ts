import { ModelService } from './model.service';
export declare class ModelController {
    private readonly modelService;
    constructor(modelService: ModelService);
    getAllModels(): Promise<import("./model.entity").ModelEntity[]>;
    createModel(language: string, redacteur: string, libelle: string, type: string, dateRedaction: Date, boilerPlate: any, champs: any): Promise<import("typeorm").InsertResult>;
    getOneModel(id: number): Promise<import("./model.entity").ModelEntity[]>;
}
