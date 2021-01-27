import { Comparent } from "src/comparent/comparent.model";
import { PersonPhisique } from "../person-phisique/person-phisique.model";

export class Entreprise {
    constructor(
        public comparent: number,
        public representant: any,
        public raisonSociale: string,
        public raisonSocialeAr: string,
        public ice: string,
        public rc: string,
        public cnss: number,
        public Adresse: string,
        public AdresseAr: string,
        public IDF: string,
        public RS: string,
        public tel: string,
        public capital: string,
    ) { };
}