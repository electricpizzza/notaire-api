import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Inovice } from 'src/inovice';
import { Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { Transaction } from './transaction.model';

@Injectable()
export class TransactionService {
    constructor(@InjectRepository(TransactionEntity) private transactionRepositry: Repository<TransactionEntity>) { }

    async getallTransactions() {
        return await this.transactionRepositry.find();
    }

    async getOneTransaction(id: number) {
        const trans = await this.transactionRepositry.findOne({ where: { id } });
        if (!trans) {
            throw new NotFoundException()
        }
        return trans;
    }

    async getTransactionByCompta(compta: number) {
        const trans = await this.transactionRepositry.find({ where: { comptabilite: compta } });
        if (!trans) {
            throw new NotFoundException()
        }
        return trans;
    }

    async makeTransaction(trans: Transaction) {
        let recu = null;
        if (trans.service.type === "recette") {
            const invoice = new Inovice();
            recu = invoice.createRecu();
        }
        const transaction = await this.transactionRepositry.insert(trans);
        return { transaction, recu };
    }

    async updateTransaction(trans: Transaction) {
        const newTrans = await this.transactionRepositry.findOne({ where: { id: trans.id } });
        if (!newTrans) {
            throw new NotFoundException()
        }
        return await this.transactionRepositry.update(trans.id, trans);
    }

    async cancelTransaction(id: number) {
        return await this.transactionRepositry.delete(id);
    }
}
