import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Bien } from './bien.model';
import { BienService } from './bien.service';

@Controller('bien')
export class BienController {
    constructor(private readonly bienService: BienService) { }

    @Get()
    getAllBien() {
        return this.bienService.getAllBien();
    }

    @Get(':id')
    getOneBien(@Param('id') id: number) {
        return this.bienService.getOneBien(id);
    }

    @Post()
    createBien(
        @Body('libelle') libelle: string,
        @Body('type') type: string,
        @Body('description') description: string,
        @Body('address') address: string,
        @Body('ville') ville: string,
        @Body('Superficie') Superficie: string,
        @Body('nb_piece') nb_piece: number,
        @Body('etage') etage: number,
        @Body('Immeuble') Immeuble: string,
        @Body('terrainType') terrainType: string,
        @Body('ancfcc') ancfcc: string,
        @Body('valeur') valeur: number,
    ) {
        const bien = new Bien(null, libelle, type, description, address, ville, Superficie, nb_piece, etage, Immeuble, terrainType, ancfcc, valeur);
        return this.bienService.createBien(bien);
    }

    @Put(':id')
    updateBien(
        @Param('id') id: number,
        @Body('libelle') libelle: string,
        @Body('type') type: string,
        @Body('description') description: string,
        @Body('address') address: string,
        @Body('ville') ville: string,
        @Body('Superficie') Superficie: string,
        @Body('nb_piece') nb_piece: number,
        @Body('etage') etage: number,
        @Body('Immeuble') Immeuble: string,
        @Body('terrainType') terrainType: string,
        @Body('ancfcc') ancfcc: string,
        @Body('valeur') valeur: number,
    ) {
        const bien = new Bien(id, libelle, type, description, address, ville, Superficie, nb_piece, etage, Immeuble, terrainType, ancfcc, valeur);
        return this.bienService.updateBien(bien);
    }

    @Delete(':id')
    deleteBien(@Param('id') id: number) {
        return this.bienService.deleteBien(id);
    }
}
