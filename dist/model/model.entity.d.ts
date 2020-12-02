import { ActeEntity } from "src/acte/acte.entity";
export declare class ModelEntity {
    id: number;
    language: string;
    redacteur: string;
    libelle: string;
    type: string;
    champs: any;
    boilerPlate: any;
    actes: ActeEntity[];
}
