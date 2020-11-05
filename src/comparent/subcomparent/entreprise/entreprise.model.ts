import { Comparent } from "src/comparent/comparent.model";
import { PersonPhisique } from "../person-phisique/person-phisique.model";

export class Entreprise {
    constructor(
        public comparent: number,
        public representant: number[],
        public raisonSociale: string,
        public ice: string,
        public rc: string,
        public cnss: number,
        public Adresse: string,
    ) { };
}