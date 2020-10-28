import { Injectable, NotFoundException } from "@nestjs/common";
import { Dossier } from "./dossier.model";

@Injectable()
export class DossierService {
    private dossiers : Dossier[] = [];
    inserDossier( title:string, description:string ){
        const docId = `${new Date().getUTCFullYear()}-${Math.random()*1000}`;
        const newDoc = new Dossier(docId,title,description);
        this.dossiers.push(newDoc);
        return docId;
    }

    getAllDossierss(){
        return [...this.dossiers];
    }

    getOneDossier(id:string){
        if (!this.dossiers.find(d => d.id === id)) {
            throw new NotFoundException();
        }
        return this.dossiers.find(d => d.id === id);
    }
}