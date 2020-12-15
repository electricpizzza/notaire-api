export class Dossier {

    constructor(
        public id: number,
        public identifiant: string,
        public title: string,
        public description: string,
        public nature: string,
        public libelle: string,
        public dateOuverture: string,
        public dateFermeture: string,
        public NomMaitre: string,
        public comparents: number[],
        public bien: number[],
    ) { };
}
