export default class Archive {
    id: number;
    titre: string;
    description: string;
    filesPath: string[];
    dossiers: number;
    mainFile: string;
    constructor(id: number, titre: string, description: string, filesPath: string[], dossiers: number, mainFile: string);
}
