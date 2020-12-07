import { Body, Controller, Get, Param, Post, Put, Delete, UseGuards, Query } from "@nestjs/common";
import { Dossier } from "./dossier.model";
import { DossierService } from "./dossier.service";
import { AuthGuard } from './../auth/auh.gaurd';
import { ComparentService } from "src/comparent/comparent.service";
import { BienService } from "src/bien/bien.service";



@Controller('dossiers')
export class DossierController {
    constructor(
        private readonly dossierServeice: DossierService,
    ) { };
    @Post()
    addDossier(@Body('title') docTitle: string, @Body('description') docDescription: string,
        @Body('nature') nature: string, @Body('libelle') libelle: string, @Body('dateOuverture') dateOuverture: string,
        @Body('dateFermeture') dateFermeture: string, @Body('NomMaitre') NomMaitre: string,
        @Body('Bien') biens: number[], @Body('Comparent') comparents: number[],
    ) {
        const doc = new Dossier(null, docTitle, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, comparents, biens);
        return this.dossierServeice.inserDossier(doc);

    }



    @Get()
    // @UseGuards(new AuthGuard())
    getDossiers(@Query() query: any) {
        if (query.dossier)
            return this.getOneDoc(query.dossier);
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
        @Body('title') docTitle: string, @Body('description') docDescription: string,
        @Body('nature') nature: string, @Body('libelle') libelle: string, @Body('dateOuverture') dateOuverture: string,
        @Body('dateFermeture') dateFermeture: string, @Body('NomMaitre') NomMaitre: string,
        @Body('Bien') biens: number[], @Body('Comparent') comparents: number[],
    ) {

        const dossier = new Dossier(docId, docTitle, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, comparents, biens)
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

