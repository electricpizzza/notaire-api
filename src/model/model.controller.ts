import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Model } from './model.model';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
    constructor(private readonly modelService: ModelService) { };

    @Get()
    getAllModels() {
        return this.modelService.getAllModels();
    }

    @Post()
    createModel(
        @Body('language') language: string,
        @Body('redacteur') redacteur: string,
        @Body('libelle') libelle: string,
        @Body('type') type: string,
        @Body('dateRedaction') dateRedaction: Date,
        @Body('boilerPlate') boilerPlate: any,
        @Body('champs') champs: any,
    ) {
        const model = new Model(null, language, redacteur, libelle, type, champs, dateRedaction, boilerPlate);
        return this.modelService.createModel(model);
    }

    @Get(':id')
    getOneModel(@Param('id') id: number) {
        return this.modelService.getOneModel(id);
    }
}