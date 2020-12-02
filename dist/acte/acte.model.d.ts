import { Model } from "src/model/model.model";
export declare class Acte {
    id: number;
    libelle: string;
    redacteur: string;
    contenu: any;
    dateRedaction: Date;
    fichier: string;
    model: Model;
    constructor(id: number, libelle: string, redacteur: string, contenu: any, dateRedaction: Date, fichier: string, model: Model);
}
