export declare class Transaction {
    id: number;
    libelle: string;
    service: any;
    comptabilite: number;
    typeTrans: string;
    typePay: string;
    comparent: number;
    valeur: number;
    dateTrans: Date;
    constructor(id: number, libelle: string, service: any, comptabilite: number, typeTrans: string, typePay: string, comparent: number, valeur: number, dateTrans: Date);
}
