import { Comparent } from "src/comparent/comparent.model";
import { PersonPhisique } from "../person-phisique/person-phisique.model";

export class Entreprise{
    constructor(
        public comparent: Comparent,
        public representant: PersonPhisique[],
        public raisonSociale: string,
        public ice: string,
        public rc: string,
        public If: string,
        public cnss: number,
        public Adresse: string,
    ) {};
}