import { Comparent } from './comparent.model';
import { ComparentService } from './comparent.service';
export declare class ComparentController {
    private readonly comparentService;
    constructor(comparentService: ComparentService);
    getAllComparents(): Promise<import("./comparent.entity").ComparentEntity[]>;
    creatComparent(type: string, nom: string): Promise<import("typeorm").InsertResult>;
    createEntreprise(raisonSociale: string, ice: string, rc: string, cnss: number, Adresse: string, representant: number[], comparent: number): Promise<import("typeorm").InsertResult>;
    createPerson(nomFr: string, nomAr: string, prenomFr: string, prenomAr: string, nationalite: string, fonction: string, nomPereFr: string, nomPereAr: string, nomMereFr: string, nomMereAr: string, situation: string, dateNaissance: Date, nomCompanionFr: string, nomCompanionAr: string, typeIdentification: string, Identification: string, IdentificationValable: Date, comparent: Comparent): Promise<import("typeorm").InsertResult>;
    createMineur(nomFr: string, nomAr: string, prenomFr: string, prenomAr: string, nationalite: string, nomPereFr: string, nomPereAr: string, nomMereFr: string, nomMereAr: string, dateNaissance: Date, typeIdentification: string, Identification: string, IdentificationValable: Date, comparent: number, tutelle: number): Promise<import("typeorm").InsertResult>;
    getOneComparent(compId: number): Promise<{
        comparent: import("./comparent.entity").ComparentEntity[];
        comparentInfo: any;
    }>;
    updateComparent(compId: number): void;
    updateEntreprise(comparent: number, raisonSociale: string, ice: string, rc: string, cnss: number, Adresse: string, representant: number[]): Promise<import("typeorm").UpdateResult>;
    updatePerson(comparent: number, nomFr: string, nomAr: string, prenomFr: string, prenomAr: string, nationalite: string, fonction: string, nomPereFr: string, nomPereAr: string, nomMereFr: string, nomMereAr: string, situation: string, dateNaissance: Date, nomCompanionFr: string, nomCompanionAr: string, typeIdentification: string, Identification: string, IdentificationValable: Date): Promise<import("typeorm").UpdateResult>;
    updateMinor(comparent: number, nomFr: string, nomAr: string, prenomFr: string, prenomAr: string, nationalite: string, nomPereFr: string, nomPereAr: string, nomMereFr: string, nomMereAr: string, dateNaissance: Date, typeIdentification: string, Identification: string, IdentificationValable: Date, tutelle: number): Promise<import("typeorm").UpdateResult>;
    deleteComparent(compId: number): Promise<import("./comparent.entity").ComparentEntity>;
}
