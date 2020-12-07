import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Transaction } from './transaction.model';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private readonly transactionService: TransactionService) { }

    @Get()
    getAll() {
        return this.transactionService.getallTransactions();
    }

    @Get(':id')
    getOneTrans(@Param('id') id: number) {
        return this.transactionService.getOneTransaction(id);
    }

    @Get('/comptabilite/:compta')
    getByComptabilite(@Param('compta') compta: number) {
        return this.transactionService.getTransactionByCompta(compta);
    }

    @Post()
    makeTransaction(
        @Body('comptabilite') comptabilite: number,
        @Body('typeTrans') typeTrans: string,
        @Body('typePay') typePay: string,
        @Body('comparent') comparent: number,
        @Body('valeur') valeur: number,
    ) {
        const trans = new Transaction(null, comptabilite, typeTrans, typePay, comparent, valeur, new Date());
        return this.transactionService.makeTransaction(trans);
    }

    @Put(':id')
    updateTransaction(
        @Param('id') id: number,
        @Body('comptabilite') comptabilite: number,
        @Body('typeTrans') typeTrans: string,
        @Body('typePay') typePay: string,
        @Body('comparent') comparent: number,
        @Body('valeur') valeur: number,
    ) {
        const trans = new Transaction(id, comptabilite, typeTrans, typePay, comparent, valeur, new Date());
        return this.transactionService.updateTransaction(trans);
    }
}
