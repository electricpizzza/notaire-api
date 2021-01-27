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
        @Body('detailSuperficie') detailSuperficie: string,
        @Body('nb_piece') nb_piece: number,
        @Body('etage') etage: number,
        @Body('Immeuble') Immeuble: string,
        @Body('terrainType') terrainType: string,
        @Body('ancfcc') ancfcc: string,
        @Body('valeur') valeur: number,
        @Body('details') details: any,
        @Body('descriptionAr') descriptionAr: string,
        @Body('addressAr') addressAr: string,
        @Body('villeAr') villeAr: string,
        @Body('detailSuperficieAr') detailSuperficieAr: string,
        @Body('typeAr') typeAr: string,
    ) {
        const bien = new Bien(null, libelle, type, description, address, ville, Superficie, detailSuperficie, nb_piece, etage, Immeuble, terrainType, ancfcc, valeur, JSON.stringify(details), typeAr, descriptionAr, addressAr, villeAr, detailSuperficieAr);
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
        @Body('detailSuperficie') detailSuperficie: string,
        @Body('nb_piece') nb_piece: number,
        @Body('etage') etage: number,
        @Body('Immeuble') Immeuble: string,
        @Body('terrainType') terrainType: string,
        @Body('ancfcc') ancfcc: string,
        @Body('valeur') valeur: number,
        @Body('details') details: any,
        @Body('descriptionAr') descriptionAr: string,
        @Body('addressAr') addressAr: string,
        @Body('villeAr') villeAr: string,
        @Body('detailSuperficieAr') detailSuperficieAr: string,
        @Body('typeAr') typeAr: string,
    ) {
        const bien = new Bien(id, libelle, type, description, address, ville, Superficie, detailSuperficie, nb_piece, etage, Immeuble, terrainType, ancfcc, valeur, JSON.stringify(details), typeAr, descriptionAr, addressAr, villeAr, detailSuperficieAr);
        console.log(bien)
        return this.bienService.updateBien(bien);
    }

    @Delete(':id')
    deleteBien(@Param('id') id: number) {
        return this.bienService.deleteBien(id);
    }
}
