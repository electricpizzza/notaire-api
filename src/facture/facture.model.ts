export class Facture {
    constructor(
        public id: number,
        public termes: string,
        public dateFacture: Date,
        public client: any,
        public remisG: number,
        public total: number,
        public articles: any,
        public maitre: string,
    ) { };
}