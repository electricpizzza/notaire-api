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
        @Body('termes') termes: string,
        @Body('dateDevis') dateFacture: Date,
        @Body('client') client: number,
        @Body('remisG') remisG: number,
        @Body('total') total: number,
        @Body('articles') articles: any,
        @Body('maitre') maitre: string,
    ) {
        const facture = new Facture(null, termes, dateFacture, client, remisG, total, articles, maitre);
        const newFacture = this.factureService.createFacture(facture);
        const inovice = new Inovice()

        //----------------------------------------                                       add payment type
        const link = inovice.makeInovice("factures", 'RKLSD12', facture.articles, "Benjelloun", facture.client, "Espece", facture.dateFacture, facture.total - facture.remisG);
        return { newFacture, link }
    }

    @Delete(':id')
    anullerFacture(@Param('id') id: number) {
        return this.anullerFacture(id)
    }
}
