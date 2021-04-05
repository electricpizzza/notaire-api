import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Inovice } from 'src/inovice';
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
        @Body('reference') reference: string,
        @Body('termes') termes: string,
        @Body('dateDevis') dateFacture: Date,
        @Body('client') client: number,
        @Body('remisG') remisG: number,
        @Body('total') total: number,
        @Body('articles') articles: any,
        @Body('maitre') maitre: string,
        @Body('payment') payment: string,
    ) {
        const facture = new Facture(null, reference, termes, dateFacture, client, remisG, total, payment, articles, maitre, null);
        const newFacture = this.factureService.createFacture(facture);
        return newFacture;
    }

    @Delete(':id')
    anullerFacture(@Param('id') id: number) {
        return this.factureService.anullerFacture(id)
    }
}
