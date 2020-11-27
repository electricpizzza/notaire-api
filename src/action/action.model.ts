export class Action {
    constructor(
        public id: number,
        public dossier: number,
        public user: number,

        public type: string,
        public date: Date,
        public description: string,
    ) { }
}