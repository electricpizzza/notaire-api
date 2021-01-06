export declare class Devis {
    id: number;
    reference: string;
    termes: string;
    dateDevis: Date;
    client: any;
    remisG: number;
    total: number;
    payment: string;
    articles: any;
    maitre: string;
    link: string;
    constructor(id: number, reference: string, termes: string, dateDevis: Date, client: any, remisG: number, total: number, payment: string, articles: any, maitre: string, link: string);
}
