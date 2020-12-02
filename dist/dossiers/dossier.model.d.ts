export declare class Dossier {
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
    constructor(id: number, title: string, description: string, nature: string, libelle: string, dateOuverture: string, dateFermeture: string, NomMaitre: string, comparents: number[], bien: number[]);
}
