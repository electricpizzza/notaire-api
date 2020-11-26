export class Devis {
    constructor(
        public id: number,
        public termes: string,
        public dateDevis: Date,
        public client: number,
        public remisG: number,
        public articles: any
    ) { }

}