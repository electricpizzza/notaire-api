import { ActeEntity } from "src/acte/acte.entity";
export declare class DossierEntity {
    id: number;
    title: string;
    description: string;
    nature: string;
    libelle: string;
    dateOuverture: string;
    dateFermeture: string;
    NomMaitre: string;
    comparents: number[];
    bien: number[];
    actes: ActeEntity;
}
