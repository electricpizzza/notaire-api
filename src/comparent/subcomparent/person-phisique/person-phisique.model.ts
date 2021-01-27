import { Comparent } from "src/comparent/comparent.model";

export class PersonPhisique {
    constructor(
        public comparent: number,

        public nomFr: string,
        public nomAr: string,
        public prenomFr: string,
        public prenomAr: string,
        public nationalite: string,
        public nationaliteAr: string,
        public fonction: string,
        public fonctionAr: string,
        public Adresse: string,
        public AdresseAr: string,

        public nomPereFr: string,
        public nomPereAr: string,
        public nomMereFr: string,
        public nomMereAr: string,

        public situation: string,
        public dateNaissance: Date,
        public lieuxNaissance: string,
        public lieuxNaissanceAr: string,
        public nomCompanionFr: string,
        public nomCompanionAr: string,

        public typeIdentification: string,
        public Identification: string,
        public IdentificationValable: Date,
        public tel: string,

    ) { };
}