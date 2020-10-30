import { Comparent } from "src/comparent/comparent.model";
import { PersonPhisique } from "../person-phisique/person-phisique.model";

export class Mineur{
    constructor(
        public comparent: Comparent,
        public tutelle: PersonPhisique,

        public nomFr: string,
        public nomAr: string,
        public prenomFr: string,
        public prenomAr: string,
        public nationalite: string,
        
        public nomPereFr: string,
        public nomPereAr: string,
        public nomMereFr: string,
        public nomMereAr: string,

        public dateNaissance: Date,

        public typeIdentification: string,
        public Identification: string,
        public IdentificationValable: Date,
    ){};
}