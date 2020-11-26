export default class Archive {
    constructor(
        public id: number,
        public titre: string,
        public description: string,
        public filesPath: string[],
        public dossiers: number
    ) { }
}