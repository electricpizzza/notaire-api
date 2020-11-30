import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Inovice } from 'src/inovice';
import { Devis } from './devis.model';
import { DevisService } from './devis.service';

@Controller('devis')
export class DevisController {
    constructor(private readonly devisService: DevisService) { }

    @Get()
    getAllDevis() {
        return this.devisService.getAllDevis()
    }

    @Get(':id')
    getOneDevis(@Param('id') id: number) {
        return this.getOneDevis(id)
    }

    @Post()
    createDevis(
        @Body('termes') termes: string,
        @Body('dateDevis') dateDevis: Date,
        @Body('client') client: number,
        @Body('remisG') remisG: number,
        @Body('total') total: number,
        @Body('articles') articles: any,
        @Body('maitre') maitre: string,
    ) {
        const devis = new Devis(null, termes, dateDevis, client, remisG, total, articles, "Benjelloun");
        const newDevis = this.devisService.createDevis(devis);
        const inovice = new Inovice()

        //----------------------------------------                                       add payment type
        const link = inovice.makeInovice("devis", 'RKLSD12', devis.articles, "Benjelloun", devis.client, "Espece", devis.dateDevis, devis.total - devis.remisG)
        return { newDevis, link }
    }

    @Delete(':id')
    deleteDevis(@Param('id') id: number) {
        return this.devisService.deletDevis(id)
    }
}
