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



    @Get('/count')
    getDevisCount() {
        return this.devisService.getCount();
    }

    @Get(':id')
    getOneDevis(@Param('id') id: number) {
        return this.devisService.getOneDevis(id)
    }

    @Post()
    createDevis(
        @Body('reference') reference: string,
        @Body('termes') termes: string,
        @Body('dateDevis') dateDevis: Date,
        @Body('client') client: number,
        @Body('remisG') remisG: number,
        @Body('total') total: number,
        @Body('articles') articles: any,
        @Body('maitre') maitre: string,
        @Body('payment') payment: string,
    ) {
        const devis = new Devis(null, reference, termes, dateDevis, client, remisG, total, payment, articles, maitre, null);
        const newDevis = this.devisService.createDevis(devis);
        return newDevis;
    }

    @Delete(':id')
    deleteDevis(@Param('id') id: number) {
        return this.devisService.deletDevis(id)
    }

}
