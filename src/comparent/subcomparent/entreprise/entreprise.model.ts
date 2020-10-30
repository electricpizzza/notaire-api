import { Comparent } from "src/comparent/comparent.model";
import { PersonPhisique } from "../person-phisique/person-phisique.model";

export class Entreprise{
    constructor(
        public comparent: Comparent,
        public representant: PersonPhisique[],

        public reson: string,
    ) {};
}