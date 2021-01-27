export class Bien {
    constructor(
        public id: number,
        public libelle: string,
        public type: string,
        public description: string,
        public address: string,
        public ville: string,
        public Superficie: string,
        public detailSuperficie: string,
        public nb_piece: number,
        public etage: number,
        public Immeuble: string,
        public terrainType: string,
        public ancfcc: string,
        public valeur: number,
        public details: any,

        public typeAr: string,
        public descriptionAr: string,
        public addressAr: string,
        public villeAr: string,
        public detailSuperficieAr: string,

    ) { };
}