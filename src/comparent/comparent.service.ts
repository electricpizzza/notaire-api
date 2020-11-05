import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ComparentEntity } from './comparent.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { EntrepriseCom } from './subcomparent/entreprise/entreprise.entity';
import { Entreprise } from './subcomparent/entreprise/entreprise.model';
import { PersonPhysiqiueEntity } from './subcomparent/person-phisique/person-phisique.entity';
import { MineurEntity } from './subcomparent/mineur/mineur.entity';
import { PersonPhisique } from './subcomparent/person-phisique/person-phisique.model';
import { Mineur } from './subcomparent/mineur/mineur.model';
import { Comparent } from './comparent.model';


@Injectable()
export class ComparentService {
    constructor(
        @InjectRepository(ComparentEntity)
        private comparentRepository: Repository<ComparentEntity>,
        @InjectRepository(EntrepriseCom)
        private entrepriseRepository: Repository<Entreprise>,
        @InjectRepository(PersonPhysiqiueEntity)
        private personRepository: Repository<PersonPhysiqiueEntity>,
        @InjectRepository(MineurEntity)
        private mineurRepository: Repository<MineurEntity>,
    ) { };

    async getAllComparent() {
        const comparents = await this.comparentRepository.find();
        return comparents;
    }

    async getOneComparent(id: number) {
        const comparent = await this.comparentRepository.find({ where: { id } });
        if (!comparent) {
            throw new NotFoundException("Comarent Not Found");
        }
        let comparentInfo;
        comparent[0].type === 'PP' ?
            comparentInfo = await this.personRepository.find({ where: { comparent: comparent[0].id } }) : []
        comparent[0].type === 'PM' ?
            comparentInfo = await this.entrepriseRepository.find({ where: { comparent: comparent[0].id } }) : [];
        comparent[0].type === 'PPM' ?
            comparentInfo = await this.mineurRepository.find({ where: { comparent: comparent[0].id } }) : [];

        return { comparent, comparentInfo };
    }

    async createComparent(compa: Comparent, person?: PersonPhisique, entreprise?: Entreprise, mineur?: Mineur) {

        const newComp = await this.comparentRepository.insert(compa);
        // let newDetail;
        // if (newComp[0].type === 'pp') {
        //     person.comparent = newComp;
        //     newDetail = this.personRepository.create(person);
        // }
        // if (newComp[0].type === 'entreprise') {
        //     entreprise.comparent = newComp;
        //     newDetail = this.entrepriseRepository.create(entreprise);
        // }
        // if (newComp[0].type === 'mineur') {
        //     mineur.comparent = newComp;
        //     newDetail = this.mineurRepository.create(mineur);
        // }
        return newComp;
    }

    async updateComparent(id: number, compa: Comparent, person?: PersonPhisique, entreprise?: Entreprise, mineur?: Mineur) {
        const comparent = this.comparentRepository.find({ where: { id } });

        if (!comparent) {
            throw new NotFoundException("Comarent Not Found");
        }

        return comparent;
    }

    async deleteComparent(id: number) {
        const comparent = this.comparentRepository.find({ where: { id } });

        if (!comparent) {
            if (comparent[0].type === 'pp') {
                this.personRepository.delete(id);
            }
            if (comparent[0].type === 'entreprise') {
                this.entrepriseRepository.delete(id);
            }
            if (comparent[0].type === 'mineur') {
                this.mineurRepository.delete(id);
            }
            this.comparentRepository.delete(id)
        } else throw new NotFoundException("Comarent Not Found");

        return comparent;
    }

    async createEntreprise(entreprise) {

        return await this.entrepriseRepository.insert(entreprise);

    }

    async createPersonne(personne) {
        return await this.personRepository.insert(personne);
    }

    async createMineur(mineur) {
        return await this.mineurRepository.insert(mineur);
    }

}
