export class Facture {
    constructor(
        public id: number,
        public dossier: number,
        public client: number,
        public description: string,
        public total: number,
    ) { };
}