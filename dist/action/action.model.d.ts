export declare class Action {
    id: number;
    dossier: number;
    user: number;
    type: string;
    date: Date;
    description: string;
    constructor(id: number, dossier: number, user: number, type: string, date: Date, description: string);
}
