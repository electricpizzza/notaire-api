export class Transaction {
    constructor(
        public id: number,
        public libelle: string,
        public comptabilite: number,
        public typeTrans: string,
        public typePay: string,
        public comparent: number,
        public valeur: number,
        public dateTrans: Date,
    ) { }
}