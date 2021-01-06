import { Repository } from 'typeorm';
import { TransactionEntity } from './transaction.entity';
import { Transaction } from './transaction.model';
export declare class TransactionService {
    private transactionRepositry;
    constructor(transactionRepositry: Repository<TransactionEntity>);
    getallTransactions(): Promise<TransactionEntity[]>;
    getOneTransaction(id: number): Promise<TransactionEntity>;
    getTransactionByCompta(compta: number): Promise<TransactionEntity[]>;
    makeTransaction(trans: Transaction): Promise<import("typeorm").InsertResult>;
    updateTransaction(trans: Transaction): Promise<import("typeorm").UpdateResult>;
    cancelTransaction(id: number): Promise<import("typeorm").DeleteResult>;
}
