export class Facture {
    constructor(
        public id: number,
        public reference: string,
        public termes: string,
        public dateFacture: Date,
        public client: any,
        public remisG: number,
        public total: number,
        public payment: string,
        public articles: any,
        public maitre: string,
        public link: string,
    ) { };
}