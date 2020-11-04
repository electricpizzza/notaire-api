import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Comparent } from './comparent.model';
import { ComparentService } from './comparent.service';
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



        @Body('nomFr') nomFr?: string,
        @Body('nomAr') nomAr?: string,
        @Body('prenomFr') prenomFr?: string,
        @Body('prenomAr') prenomAr?: string,
        @Body('nationalite') nationalite?: string,
        @Body('fonction') fonction?: string,
        @Body('nomPereFr') nomPereFr?: string,
        @Body('nomPereAr') nomPereAr?: string,
        @Body('nomMereFr') nomMereFr?: string,
        @Body('nomMereAr') nomMereAr?: string,
        @Body('situation') situation?: string,
        @Body('dateNaissance') dateNaissance?: Date,
        @Body('nomCompanionFr') nomCompanionFr?: string,
        @Body('nomCompanionAr') nomCompanionAr?: string,
        @Body('typeIdentification') typeIdentification?: string,
        @Body('Identification') Identification?: string,
        @Body('IdentificationValable') IdentificationValable?: Date,

        @Body('tutelle') tutelle?: number,
    ) {
        const comparent = new Comparent(0, type, nom, new Date());
        // if (type === 'pp') {
        //     const person = new PersonPhisique(null, nomAr, nomFr, prenomAr, prenomFr, nationalite, fonction, nomPereFr, nomPereAr, nomMereFr, nomMereAr, situation, dateNaissance, nomCompanionFr, nomCompanionAr, typeIdentification, Identification, IdentificationValable);
        //     this.comparentService.createComparent(comparent, person);
        // }
        // if (type === 'entreprise') {
        //     const repres = PersonPhisique.apply(this.comparentService.getOneComparent(representant));
        //     const entreprise = new Entreprise(null, repres, raisonSociale, ice, rc, If, cnss, Adresse);
        //     this.comparentService.createComparent(comparent, null, entreprise);
        // }
        // if (type === 'mineur') {
        //     const tutel = PersonPhisique.apply(this.comparentService.getOneComparent(tutelle));
        //     const mineur = new Mineur(null, tutel, nomAr, nomFr, prenomAr, prenomFr, nationalite, nomPereAr, nomMereFr, nomMereAr, situation, dateNaissance, typeIdentification, Identification, IdentificationValable)
        //     this.comparentService.createComparent(null, null, null, mineur);
        // }

        return this.comparentService.createComparent(comparent);
    }

    @Post('/entreprise')
    createEntreprise(
        @Body('raisonSociale') raisonSociale: string,
        @Body('ice') ice: string,
        @Body('rc') rc: string,
        @Body('If') If: string,
        @Body('cnss') cnss: number,
        @Body('Adresse') Adresse: string,
        @Body('representant') representant: number,
        @Body('comparent') comparent: number,
    ) {
        const entre = new Entreprise(null, null, raisonSociale, ice, rc, If, cnss, Adresse)

        return this.comparentService.createEntreprise(comparent, entre, representant);
    }

    @Get(':id')
    getOneComparent(@Param('id') compId: number) {
        return this.comparentService.getOneComparent(compId);
    }

    @Put(':id')
    updateComparent(@Param('id') compId: number) {
        return;
    }
    @Delete(':id')
    deleteComparent(@Param('id') compId: number) {
        return this.comparentService.deleteComparent(compId);
    }
}
