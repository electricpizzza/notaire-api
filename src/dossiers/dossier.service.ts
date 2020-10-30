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

    private dossiers : Dossier[] = [];

    async inserDossier( title:string, description:string ){
        const newDoc = await this.dossierRepository.create({title,description});
        this.dossierRepository.save(newDoc);
        console.log(newDoc);
           
        return newDoc;
    }

    async getDocs(){
        return await this.dossierRepository.find();
    }

    async getOneDossier(id:number){
        // if (!this.dossiers.find(d => d.id === id)) {
        //     throw new NotFoundException();
        // }
        return await this.dossierRepository.findOne({where:{id}});
    }
}