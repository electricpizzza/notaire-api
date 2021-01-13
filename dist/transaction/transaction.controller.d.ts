import { TransactionService } from './transaction.service';
export declare class TransactionController {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    getAll(): Promise<import("./transaction.entity").TransactionEntity[]>;
    getOneTrans(id: number): Promise<import("./transaction.entity").TransactionEntity>;
    getByComptabilite(compta: number): Promise<import("./transaction.entity").TransactionEntity[]>;
    makeTransaction(comptabilite: number, typeTrans: string, service: any, libelle: string, typePay: string, comparent: number, valeur: number): Promise<{
        transaction: import("typeorm").InsertResult;
        recu: any;
    }>;
    updateTransaction(id: number, comptabilite: number, libelle: string, service: any, typeTrans: string, typePay: string, comparent: number, valeur: number): Promise<import("typeorm").UpdateResult>;
}
