export declare class Facture {
    id: number;
    reference: string;
    termes: string;
    dateFacture: Date;
    client: any;
    remisG: number;
    total: number;
    payment: string;
    articles: any;
    maitre: string;
    link: string;
    constructor(id: number, reference: string, termes: string, dateFacture: Date, client: any, remisG: number, total: number, payment: string, articles: any, maitre: string, link: string);
}
