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


    async createEntreprise(entreprise) {

        return await this.entrepriseRepository.insert(entreprise);

    }

    async createPersonne(personne) {
        return await this.personRepository.insert(personne);
    }

    async createMineur(mineur) {
        return await this.mineurRepository.insert(mineur);
    }


    //  Update Comparebts


    async updateEntreprise(entre: Entreprise) {
        const entreprise = this.entrepriseRepository.update(entre.comparent, entre)
        return entreprise;
    }

    async updatePerson(person: PersonPhisique) {

        const personPh = await this.personRepository.findOneOrFail({ where: { comparent: person.comparent } })
        personPh.nomFr = person.nomFr;
        personPh.nomAr = person.nomAr;
        personPh.prenomFr = person.prenomFr;
        personPh.prenomAr = person.prenomAr;
        personPh.nationalite = person.nationalite;
        personPh.fonction = person.fonction;
        personPh.nomPereFr = person.nomPereFr;
        personPh.nomPereAr = person.nomPereAr;
        personPh.nomMereFr = person.nomMereFr;
        personPh.nomMereAr = person.nomMereAr;
        personPh.situation = person.situation;
        personPh.dateNaissance = person.dateNaissance;
        personPh.nomCompanionFr = person.nomCompanionFr;
        personPh.nomCompanionAr = person.nomCompanionAr;
        personPh.typeIdentification = person.typeIdentification;
        personPh.Identification = person.Identification;
        personPh.IdentificationValable = person.IdentificationValable;

        return this.personRepository.update(person.comparent, personPh);

    }

    async updateMinor(min: Mineur) {
        const minor = await this.mineurRepository.findOneOrFail({ where: { comparent: min.comparent } });
        minor.nomFr = min.nomFr;
        minor.nomAr = min.nomAr;
        minor.prenomFr = min.prenomFr;
        minor.prenomAr = min.prenomAr;
        minor.nationalite = min.nationalite;
        minor.nomPereFr = min.nomPereFr;
        minor.nomPereAr = min.nomPereAr;
        minor.nomMereFr = min.nomMereFr;
        minor.nomMereAr = min.nomMereAr;
        minor.dateNaissance = min.dateNaissance;
        minor.typeIdentification = min.typeIdentification;
        minor.Identification = min.Identification;
        minor.IdentificationValable = min.IdentificationValable;
        minor.tutelle = [min.tutelle];

        return this.mineurRepository.update(min.comparent, minor);
    }

    //  Delete Comparent

    async deleteComparent(id: number) {
        const comparent = await this.comparentRepository.findOne({ where: { id } });
        console.log(comparent);

        if (comparent) {
            if (comparent.type === 'PP') {
                await this.personRepository.delete(id);
            }
            if (comparent.type === 'PM') {
                await this.entrepriseRepository.delete(id);
            }
            if (comparent.type === 'PPM') {
                await this.mineurRepository.delete(id);
            }
            await this.comparentRepository.delete(id)
        } else throw new NotFoundException("Comarent Not Found");

        return comparent;
    }

}
