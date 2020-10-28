import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { DossierService } from "./dossier.service";


@Controller('dossiers')
export class DossierController {
    constructor(private readonly dossierServeice : DossierService) {};
    @Post()
    addDossier(@Body('title') docTitle: string, @Body('description') docDescription: string){
         const insertedDocId = this.dossierServeice.inserDossier(docTitle,docDescription);
         return { id : insertedDocId};
    } 

    @Get()
    getDossiers(){
        const allDocs = this.dossierServeice.getAllDossierss();
        return allDocs;
    }

    @Get(':id')
    getOneDoc(@Param('id') docId :string){
        const dossier = this.dossierServeice.getOneDossier(docId)
        return dossier;
    }
}

