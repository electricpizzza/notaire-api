export class Dossier {

    constructor(
        public id:number,
        public title: string,
        public description: string,
        public nature: string,
        public libelle: string,
        public dateOuverture: string,
        public dateFermeture: string,
        public NomMaitre:string
        ){};
}
