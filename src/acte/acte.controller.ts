import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Acte } from './acte.model';
import { ActeService } from './acte.service';

@Controller('actes')
export class ActeController {
    constructor(private readonly acteService: ActeService) { }

    @Get()
    getAllActes() {
        return this.acteService.getAllActes()
    }

    @Get(':id')
    getOneActe(@Param('id') id: number) {
        return this.acteService.getOneActe(id)
    }

    @Post()
    createActe(
        @Body('libelle') libelle: string,
        @Body('redacteur') redacteur: string,
        @Body('contenu') contenu: any,
        @Body('dateRedaction') dateRedaction: Date,
        @Body('fichier') fichier: string,
        @Body('model') model: any,
        @Body('bien') bien: any[]
    ) {
        const acte = new Acte(null, libelle, redacteur, contenu, dateRedaction, fichier, model, bien)
        return this.acteService.createActe(acte)
    }
}