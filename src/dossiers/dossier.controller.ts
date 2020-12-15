import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards, Query } from "@nestjs/common";
import { Dossier } from "./dossier.model";
import { DossierService } from "./dossier.service";
import { AuthGuard } from './../auth/auh.gaurd';
import { ComparentService } from "src/comparent/comparent.service";
import { BienService } from "src/bien/bien.service";
import { ComptabiliteService } from "src/comptabilite/comptabilite.service";
import { Comptabilite } from "src/comptabilite/comptabilite.model";



@Controller('dossiers')
export class DossierController {
    constructor(
        private readonly dossierServeice: DossierService,
        private readonly comptabiliteService: ComptabiliteService,
    ) { };
    @Post()
    async addDossier(@Body('title') docTitle: string, @Body('identifiant') identifiant: string, @Body('description') docDescription: string,
        @Body('nature') nature: string, @Body('libelle') libelle: string, @Body('dateOuverture') dateOuverture: string,
        @Body('dateFermeture') dateFermeture: string, @Body('NomMaitre') NomMaitre: string,
        @Body('Bien') biens: number[], @Body('Comparent') comparents: number[],
    ) {
        const doc = new Dossier(null, identifiant, docTitle, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, comparents, biens);
        const newDoc = await this.dossierServeice.inserDossier(doc);
        const compta = new Comptabilite(newDoc.identifiers[0].id, newDoc.identifiers[0].id, docTitle + docDescription);
        const comp = await this.comptabiliteService.createCompta(compta)
        return newDoc
    }



    @Get()
    // @UseGuards(new AuthGuard())
    getDossiers(@Query() query: any) {
        if (query.dossier)
            return this.dossierServeice.getDocByIdentifiant(query.dossier);
        if (query.comp && query.bien) {
            const doc = this.dossierServeice.searchDoc(query.bien, query.comp);
            return doc;
        }
        const allDocs = this.dossierServeice.getDocs();
        return allDocs;
    }

    @Get(':id')
    getOneDoc(@Param('id') docId: number
    ) {
        const dossier = this.dossierServeice.getOneDossier(docId)
        return dossier;
    }

    @Put(':id')
    updateDoc(@Param('id') docId: number,
        @Body('title') docTitle: string, @Body('identifiant') identifiant: string, @Body('description') docDescription: string,
        @Body('nature') nature: string, @Body('libelle') libelle: string, @Body('dateOuverture') dateOuverture: string,
        @Body('dateFermeture') dateFermeture: string, @Body('NomMaitre') NomMaitre: string,
        @Body('Bien') biens: number[], @Body('Comparent') comparents: number[],
    ) {

        const dossier = new Dossier(docId, identifiant, docTitle, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, comparents, biens)
        return this.dossierServeice.updateDossier(dossier);;
    }

    @Put('/close/:id')
    closeDossier(@Param('id') docId: number) {
        return this.dossierServeice.closeDossier(docId);
    }

    @Delete(':id')
    deletDoc(@Param('id') docId: number) {
        return this.dossierServeice.deletDossier(docId);
    }

}

