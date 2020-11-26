import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
        @Body('articles') articles: any
    ) {
        const devis = new Devis(null, termes, dateDevis, client, remisG, articles);
        return this.devisService.createDevis(devis)
    }

    @Delete(':id')
    deleteDevis(@Param('id') id: number) {
        return this.devisService.deletDevis(id)
    }
}
