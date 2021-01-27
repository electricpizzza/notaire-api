import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Comparent } from './comparent.model';
import { ComparentService } from './comparent.service';
import { Banque } from './subcomparent/banque/banque.model';
import { Entreprise } from './subcomparent/entreprise/entreprise.model';
import { Mineur } from './subcomparent/mineur/mineur.model';
import { PersonPhisique } from './subcomparent/person-phisique/person-phisique.model';

@Controller('comparent')
export class ComparentController {
    constructor(private readonly comparentService: ComparentService) { }

    @Get()
    getAllComparents() {
        return this.comparentService.getAllComparent();
    }

    @Post()
    creatComparent(
        @Body('type') type: string,
        @Body('nom') nom: string,
    ) {
        const comparent = new Comparent(0, type, nom, new Date());
        return this.comparentService.createComparent(comparent);
    }

    @Post('/entreprise')
    createEntreprise(
        @Body('raisonSociale') raisonSociale: string,
        @Body('raisonSociale') raisonSocialeAr: string,
        @Body('ice') ice: string,
        @Body('rc') rc: string,
        @Body('cnss') cnss: number,
        @Body('Adresse') Adresse: string,
        @Body('AdresseAr') AdresseAr: string,
        @Body('representant') representant: any,
        @Body('comparent') comparent: number,
        @Body('IDF') IDF: string,
        @Body('RS') RS: string,
        @Body('tel') tel: string,
        @Body('capital') capital: string,
    ) {
        const entre = new Entreprise(comparent, representant, raisonSociale, raisonSocialeAr, ice, rc, cnss, Adresse, AdresseAr, IDF, RS, tel, capital)

        return this.comparentService.createEntreprise(entre);
    }

    @Post('/person')
    createPerson(
        @Body('nomFr') nomFr: string,
        @Body('nomAr') nomAr: string,
        @Body('prenomFr') prenomFr: string,
        @Body('prenomAr') prenomAr: string,
        @Body('nationalite') nationalite: string,
        @Body('nationaliteAr') nationaliteAr: string,
        @Body('fonction') fonction: string,
        @Body('fonctionAr') fonctionAr: string,
        @Body('Adresse') Address: string,
        @Body('AdresseAr') AddressAr: string,
        @Body('nomPereFr') nomPereFr: string,
        @Body('nomPereAr') nomPereAr: string,
        @Body('nomMereFr') nomMereFr: string,
        @Body('nomMereAr') nomMereAr: string,
        @Body('situation') situation: string,
        @Body('dateNaissance') dateNaissance: Date,
        @Body('lieuxNaissance') lieuxNaissance: string,
        @Body('lieuxNaissanceAr') lieuxNaissanceAr: string,
        @Body('nomCompanionFr') nomCompanionFr: string,
        @Body('nomCompanionAr') nomCompanionAr: string,
        @Body('typeIdentification') typeIdentification: string,
        @Body('Identification') Identification: string,
        @Body('IdentificationValable') IdentificationValable: Date,
        @Body('tel') tel: string,
        @Body('comparent') comparent: Comparent,

    ) {
        const person = new PersonPhisique(comparent.id, nomFr, nomAr, prenomFr, prenomAr, nationalite, nationaliteAr, fonction, fonctionAr, Address, AddressAr, nomPereFr, nomPereAr, nomMereFr, nomMereAr, situation, dateNaissance, lieuxNaissance, lieuxNaissanceAr, nomCompanionFr, nomCompanionAr, typeIdentification, Identification, IdentificationValable, tel);
        return this.comparentService.createPersonne(person);
    }

    @Post('/mineur')
    createMineur(
        @Body('nomFr') nomFr: string,
        @Body('nomAr') nomAr: string,
        @Body('prenomFr') prenomFr: string,
        @Body('prenomAr') prenomAr: string,
        @Body('nationalite') nationalite: string,
        @Body('nomPereFr') nomPereFr: string,
        @Body('nomPereAr') nomPereAr: string,
        @Body('nomMereFr') nomMereFr: string,
        @Body('nomMereAr') nomMereAr: string,
        @Body('dateNaissance') dateNaissance: Date,
        @Body('typeIdentification') typeIdentification: string,
        @Body('Identification') Identification: string,
        @Body('IdentificationValable') IdentificationValable: Date,
        @Body('comparent') comparent: number,
        @Body('tutelle') tutelle: number,
    ) {
        const mineur = new Mineur(comparent, tutelle, nomFr, nomAr, prenomFr, prenomAr, nationalite, nomPereFr, nomPereAr, nomMereFr, nomMereAr, dateNaissance, typeIdentification, Identification, IdentificationValable);
        return this.comparentService.createMineur(mineur);
    }

    @Get('/banques')
    getBanques() {
        return this.comparentService.getBanques();
    }

    @Get(':id')
    getOneComparent(@Param('id') compId: number) {
        return this.comparentService.getOneComparent(compId);
    }

    @Put(':id')
    updateComparent(@Param('id') compId: number) {
        return;
    }


    @Put('/entreprise/:comparent')
    updateEntreprise(
        @Param('comparent') comparent: number,
        @Body('raisonSociale') raisonSociale: string,
        @Body('raisonSocialeAr') raisonSocialeAr: string,
        @Body('ice') ice: string,
        @Body('rc') rc: string,
        @Body('cnss') cnss: number,
        @Body('Adresse') Adresse: string,
        @Body('AdresseAr') AdresseAr: string,
        @Body('representant') representant: any,
        @Body('IDF') IDF: string,
        @Body('RS') RS: string,
        @Body('tel') tel: string,
        @Body('capital') capital: string,
    ) {
        const entreprise = new Entreprise(comparent, representant, raisonSociale, raisonSocialeAr, ice, rc, cnss, Adresse, AdresseAr, IDF, RS, tel, capital)
        return this.comparentService.updateEntreprise(entreprise);
    }

    @Put('/person/:comparent')
    updatePerson(
        @Param('comparent') comparent: number,
        @Body('nomFr') nomFr: string,
        @Body('nomAr') nomAr: string,
        @Body('prenomFr') prenomFr: string,
        @Body('prenomAr') prenomAr: string,
        @Body('nationalite') nationalite: string,
        @Body('nationaliteAr') nationaliteAr: string,
        @Body('fonction') fonction: string,
        @Body('fonctionAr') fonctionAr: string,
        @Body('Adresse') Address: string,
        @Body('AdresseAr') AddressAr: string,
        @Body('nomPereFr') nomPereFr: string,
        @Body('nomPereAr') nomPereAr: string,
        @Body('nomMereFr') nomMereFr: string,
        @Body('nomMereAr') nomMereAr: string,
        @Body('situation') situation: string,
        @Body('dateNaissance') dateNaissance: Date,
        @Body('lieuxNaissance') lieuxNaissance: string,
        @Body('lieuxNaissanceAr') lieuxNaissanceAr: string,
        @Body('nomCompanionFr') nomCompanionFr: string,
        @Body('nomCompanionAr') nomCompanionAr: string,
        @Body('typeIdentification') typeIdentification: string,
        @Body('Identification') Identification: string,
        @Body('IdentificationValable') IdentificationValable: Date,
        @Body('tel') tel: string,
    ) {
        const person = new PersonPhisique(comparent, nomFr, nomAr, prenomFr, prenomAr, nationalite, nationaliteAr, fonction, fonctionAr, Address, AddressAr, nomPereFr, nomPereAr, nomMereFr, nomMereAr, situation, dateNaissance, nomCompanionFr, lieuxNaissance, lieuxNaissanceAr, nomCompanionAr, typeIdentification, Identification, IdentificationValable, tel);

        console.log(person);
        return this.comparentService.updatePerson(person);
    }

    @Put('/mineur/:comparent')
    updateMinor(
        @Param('comparent') comparent: number,
        @Body('nomFr') nomFr: string,
        @Body('nomAr') nomAr: string,
        @Body('prenomFr') prenomFr: string,
        @Body('prenomAr') prenomAr: string,
        @Body('nationalite') nationalite: string,
        @Body('nomPereFr') nomPereFr: string,
        @Body('nomPereAr') nomPereAr: string,
        @Body('nomMereFr') nomMereFr: string,
        @Body('nomMereAr') nomMereAr: string,
        @Body('dateNaissance') dateNaissance: Date,
        @Body('typeIdentification') typeIdentification: string,
        @Body('Identification') Identification: string,
        @Body('IdentificationValable') IdentificationValable: Date,
        @Body('tutelle') tutelle: number,
    ) {
        const mineur = new Mineur(comparent, tutelle, nomFr, nomAr, prenomFr, prenomAr, nationalite, nomPereFr, nomPereAr, nomMereFr, nomMereAr, dateNaissance, typeIdentification, Identification, IdentificationValable);
        return this.comparentService.updateMinor(mineur);
    }

    @Delete(':id')
    deleteComparent(@Param('id') compId: number) {
        return this.comparentService.deleteComparent(compId);
    }

    @Post('/banque')
    createBanque(
        @Body('comparent') comparent: number,
        @Body('libelle') libelle: string,
        @Body('libelleAr') libelleAr: string,
        @Body('Agence') Agence: string,
        @Body('AgenceAr') AgenceAr: string,
        @Body('addresse') addresse: string,
        @Body('addresseAr') addresseAr: string,
        @Body('tel') tel: string,
        @Body('ville') ville: string,
        @Body('villeAr') villeAr: string,
    ) {
        const banque = new Banque(comparent, libelle, libelleAr, Agence, AgenceAr, addresse, addresseAr, tel, ville, villeAr);
        return this.comparentService.createBanque(banque)
    }
    @Post('/banque/:comparent')
    updqteBanque(
        @Param('comparent') comparent: number,
        @Body('libelle') libelle: string,
        @Body('libelleAr') libelleAr: string,
        @Body('Agence') Agence: string,
        @Body('AgenceAr') AgenceAr: string,
        @Body('addresse') addresse: string,
        @Body('addresseAr') addresseAr: string,
        @Body('tel') tel: string,
        @Body('ville') ville: string,
        @Body('villeAr') villeAr: string,
    ) {
        const banque = new Banque(comparent, libelle, libelleAr, Agence, AgenceAr, addresse, addresseAr, tel, ville, villeAr);
        return this.comparentService.updateBanque(banque)
    }


}


