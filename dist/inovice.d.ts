export declare class Inovice {
    makeInovice(type: string, ref: any, articles: any[], maitre: string, client: any, payment: string, jusqua: any, total: number): string;
    testNewpage(articles: any): Promise<void>;
    createRecu(client: any, somme: any, libelle: any, dateTrans: any, numCheque: any, typePay: any): string;
}
