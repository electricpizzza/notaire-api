export default class Archive {
    constructor(
        public id: number,
        public titre: string,
        public filesPath: string[],
        public dossiers: number
    ) { }
}