import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Facture } from './facture.model';
import { FactureService } from './facture.service';

@Controller('facture')
export class FactureController {
    constructor(private readonly factureService: FactureService) { }

    @Get(':id')
    getOneFacture(@Param('id') id: number) {
        return this.factureService.getOneFacture(id)
    }

    @Get()
    getAllFactures() {
        return this.factureService.getAllFactures()
    }

    @Post()
    createFacture(
        @Body('dossier') dossier: number,
        @Body('client') client: number,
        @Body('description') description: string,
        @Body('total') total: number,
    ) {
        const facture = new Facture(null, dossier, client, description, total);
        return this.factureService.createFacture(facture);
    }

    @Delete(':id')
    anullerFacture(@Param('id') id: number) {
        return this.anullerFacture(id)
    }
}
