import { Body, Controller, Get, Param, Post, Put, Delete } from "@nestjs/common";
import { Dossier } from "./dossier.model";
import { DossierService } from "./dossier.service";


@Controller('dossiers')
export class DossierController {
    constructor(private readonly dossierServeice: DossierService) { };
    @Post()
    addDossier(@Body('title') docTitle: string, @Body('description') docDescription: string,
        @Body('nature') nature: string, @Body('libelle') libelle: string, @Body('dateOuverture') dateOuverture: string,
        @Body('dateFermeture') dateFermeture: string, @Body('NomMaitre') NomMaitre: string,
        @Body('Bien') biens: number[], @Body('Comparent') comparents: number[],
    ) {
        const doc = new Dossier(null, docTitle, docDescription, nature, libelle, dateOuverture, dateFermeture, NomMaitre, comparents, biens);
        // doc.title = docTitle;
        // doc.description = docDescription;
        // doc.nature = nature;
        // doc.libelle = libelle;
        // doc.dateOuverture = dateOuverture;
        // doc.dateFermeture = dateFermeture;
        // doc.NomMaitre = NomMaitre;   
        return this.dossierServeice.inserDossier(doc);

    }


    @Get()
    getDossiers() {
        const allDocs = this.dossierServeice.getDocs();
        return allDocs;
    }

    @Get(':id')
    getOneDoc(@Param('id') docId: number) {
        const dossier = this.dossierServeice.getOneDossier(docId)
        return dossier;
    }

    @Put(':id')
    updateDoc(@Param('id') docId: number, @Body('title') docTitle: string, @Body('description') docDescription: string) {
        const dossier = this.dossierServeice.updateDossier(docId, docTitle, docDescription);
        return dossier;
    }

    @Delete(':id')
    deletDoc(@Param('id') docId: number) {
        return this.dossierServeice.deletDossier(docId);
    }

}

