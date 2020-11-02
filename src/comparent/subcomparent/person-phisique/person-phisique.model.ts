import { Comparent } from "src/comparent/comparent.model";

export class PersonPhisique{
    constructor(
        public comparent: Comparent,

        public nomFr: string,
        public nomAr: string,
        public prenomFr: string,
        public prenomAr: string,
        public nationalite: string,
        public fonction: string,
        
        public nomPereFr: string,
        public nomPereAr: string,
        public nomMereFr: string,
        public nomMereAr: string,

        public situation: string,
        public dateNaissance: Date,
        public nomCompanionFr: string,
        public nomCompanionAr: string,

        public typeIdentification: string,
        public Identification: string,
        public IdentificationValable: Date,
    ){};
}