export class Devis {
    constructor(
        public id: number,
        public reference: string,
        public termes: string,
        public dateDevis: Date,
        public client: any,
        public remisG: number,
        public total: number,
        public payment: string,
        public articles: any,
        public maitre: string,
        public link: string
    ) { }

}