import { Comparent } from './comparent.model';
import { ComparentService } from './comparent.service';
export declare class ComparentController {
    private readonly comparentService;
    constructor(comparentService: ComparentService);
    getAllComparents(): Promise<import("./comparent.entity").ComparentEntity[]>;
    creatComparent(type: string, nom: string): Promise<import("typeorm").InsertResult>;
    createEntreprise(raisonSociale: string, raisonSocialeAr: string, ice: string, rc: string, cnss: number, Adresse: string, AdresseAr: string, representant: any, comparent: number, IDF: string, RS: string, tel: string, capital: string): Promise<import("typeorm").InsertResult>;
    createPerson(nomFr: string, nomAr: string, prenomFr: string, prenomAr: string, nationalite: string, nationaliteAr: string, fonction: string, fonctionAr: string, Address: string, AddressAr: string, nomPereFr: string, nomPereAr: string, nomMereFr: string, nomMereAr: string, situation: string, dateNaissance: Date, lieuxNaissance: string, lieuxNaissanceAr: string, nomCompanionFr: string, nomCompanionAr: string, typeIdentification: string, Identification: string, IdentificationValable: Date, tel: string, comparent: Comparent): Promise<import("typeorm").InsertResult>;
    createMineur(nomFr: string, nomAr: string, prenomFr: string, prenomAr: string, nationalite: string, nomPereFr: string, nomPereAr: string, nomMereFr: string, nomMereAr: string, dateNaissance: Date, typeIdentification: string, Identification: string, IdentificationValable: Date, comparent: number, tutelle: number): Promise<import("typeorm").InsertResult>;
    getBanques(): Promise<import("./comparent.entity").ComparentEntity[]>;
    getOneComparent(compId: number): Promise<{
        comparent: import("./comparent.entity").ComparentEntity[];
        comparentInfo: any;
    }>;
    updateComparent(compId: number): void;
    updateEntreprise(comparent: number, raisonSociale: string, raisonSocialeAr: string, ice: string, rc: string, cnss: number, Adresse: string, AdresseAr: string, representant: any, IDF: string, RS: string, tel: string, capital: string): Promise<import("typeorm").UpdateResult>;
    updatePerson(comparent: number, nomFr: string, nomAr: string, prenomFr: string, prenomAr: string, nationalite: string, nationaliteAr: string, fonction: string, fonctionAr: string, Address: string, AddressAr: string, nomPereFr: string, nomPereAr: string, nomMereFr: string, nomMereAr: string, situation: string, dateNaissance: Date, lieuxNaissance: string, lieuxNaissanceAr: string, nomCompanionFr: string, nomCompanionAr: string, typeIdentification: string, Identification: string, IdentificationValable: Date, tel: string): Promise<import("typeorm").UpdateResult>;
    updateMinor(comparent: number, nomFr: string, nomAr: string, prenomFr: string, prenomAr: string, nationalite: string, nomPereFr: string, nomPereAr: string, nomMereFr: string, nomMereAr: string, dateNaissance: Date, typeIdentification: string, Identification: string, IdentificationValable: Date, tutelle: number): Promise<import("typeorm").UpdateResult>;
    deleteComparent(compId: number): Promise<import("./comparent.entity").ComparentEntity>;
    createBanque(comparent: number, libelle: string, libelleAr: string, Agence: string, AgenceAr: string, addresse: string, addresseAr: string, tel: string, ville: string, villeAr: string): Promise<import("typeorm").InsertResult>;
    updqteBanque(comparent: number, libelle: string, libelleAr: string, Agence: string, AgenceAr: string, addresse: string, addresseAr: string, tel: string, ville: string, villeAr: string): Promise<import("typeorm").UpdateResult>;
}
