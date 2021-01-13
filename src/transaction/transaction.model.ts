export class Transaction {
    constructor(
        public id: number,
        public libelle: string,
        public service: any,
        public comptabilite: number,
        public typeTrans: string, // debit || credit
        public typePay: string,
        public comparent: number,
        public valeur: number,
        public dateTrans: Date,
    ) { }
}