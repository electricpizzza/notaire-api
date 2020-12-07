import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ComparentService } from 'src/comparent/comparent.service';
import { Comptabilite } from './comptabilite.model';
import { ComptabiliteService } from './comptabilite.service';

@Controller('comptabilite')
export class ComptabiliteController {
    constructor(private readonly comptabiliteService: ComptabiliteService) { }

    @Get()
    getAll() {
        return this.comptabiliteService.getAllComptas();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.comptabiliteService.getOneCompta(id);
    }

    @Get('/dossier/:dossier')
    getByDossier(@Param('dossier') dossier: number) {
        return this.comptabiliteService.getByDossier(dossier)
    }

    @Post()
    createCompta(
        @Body('dossier') dossier: number,
        @Body('description') description: string,
    ) {
        const com = new Comptabilite(null, dossier, description);
        return this.comptabiliteService.createCompta(com);
    }

    @Put(':id')
    updateCompta(
        @Param('id') id: number,
        @Body('dossier') dossier: number,
        @Body('description') description: string,
    ) {
        const com = new Comptabilite(id, dossier, description);
        return this.comptabiliteService.updateCompta(com);
    }
}

