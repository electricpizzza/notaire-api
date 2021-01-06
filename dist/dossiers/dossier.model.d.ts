export declare class Dossier {
    id: number;
    identifiant: string;
    title: string;
    description: string;
    nature: string;
    libelle: string;
    dateOuverture: string;
    dateFermeture: string;
    NomMaitre: string;
    comparents: number[];
    bien: number[];
    constructor(id: number, identifiant: string, title: string, description: string, nature: string, libelle: string, dateOuverture: string, dateFermeture: string, NomMaitre: string, comparents: number[], bien: number[]);
}
