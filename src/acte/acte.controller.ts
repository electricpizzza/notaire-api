import { BadGatewayException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
        @Body('lang') lang: string,
        @Body('libelle') libelle: string,
        @Body('redacteur') redacteur: string,
        @Body('contenu') contenu: any,
        @Body('data') data: any,
        @Body('dateRedaction') dateRedaction: Date,
        @Body('fichier') fichier: string,
        @Body('dossierId') dossierId: any,
        @Body('model') model: any,
    ) {
        const acte = new Acte(null, libelle, redacteur, contenu, new Date(), fichier, model);
        // throw new BadGatewayException();
        return this.acteService.createActe(acte, lang)
    }

    @Put(':id')
    updateActe(@Param('id') id: number,
        @Body('libelle') libelle: string,
        @Body('redacteur') redacteur: string,
        @Body('contenu') contenu: any,
        @Body('dateRedaction') dateRedaction: Date,
        @Body('fichier') fichier: string,
        @Body('dossierId') model: any,
    ) {
        const acte = new Acte(id, libelle, redacteur, contenu, dateRedaction, fichier, model)
        return this.acteService.updateActe(acte);
    }

    @Delete(':id')
    deleteActe(@Param('id') id: number) {
        return this.acteService.deleteActe(id);
    }
}