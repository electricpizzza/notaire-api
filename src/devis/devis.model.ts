export class Devis {
    constructor(
        public id: number,
        public termes: string,
        public dateDevis: Date,
        public client: any,
        public remisG: number,
        public total: number,
        public articles: any,
        public maitre: string
    ) { }

}