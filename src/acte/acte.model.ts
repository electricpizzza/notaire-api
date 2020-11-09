import { Bien } from "src/bien/bien.model";
import { Model } from "src/model/model.model";

export class Acte {
    constructor(
        public id: number,
        public libelle: string,
        public redacteur: string,
        public contenu: any,
        public dateRedaction: Date,
        public fichier: string,

        public model: Model,
        public bines: Bien[],
    ) { };
}