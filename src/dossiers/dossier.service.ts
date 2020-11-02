import { Injectable, NotFoundException } from "@nestjs/common";
import { DossierEntity } from "./dossier.entity";
import { Dossier } from "./dossier.model";

import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class DossierService {

    constructor(
        @InjectRepository(DossierEntity)
         private dossierRepository : Repository<DossierEntity>,
         ) {};

    async inserDossier( dossier: Dossier ){
        const newDoc = await this.dossierRepository.create(dossier);
        this.dossierRepository.save(newDoc);
        console.log(newDoc);
           
        return newDoc;
    }

    async getDocs(){
        return await this.dossierRepository.find();
    }

    async getOneDossier(id:number){
        const dossier = await this.dossierRepository.findOne({where:{id}});
        if (!dossier) {
            throw new NotFoundException("Dossier Introuvable");
        }
        return dossier;
    }

    async updateDossier(id:number, title:string, description:string) {
        const dossier = await this.dossierRepository.findOne({where:{id}});
        if (!dossier) {
            throw new NotFoundException("Dossier Introuvable");
            
        }
        dossier.title = title;
        dossier.description = description;
        this.dossierRepository.save(dossier);

        return dossier;
    }

    async deletDossier(id:number) {
        this.dossierRepository.delete(id)
    }
}