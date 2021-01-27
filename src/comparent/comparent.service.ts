import { Injectable, NotFoundException } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { ComparentEntity } from './comparent.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { EntrepriseCom } from './subcomparent/entreprise/entreprise.entity';
import { Entreprise } from './subcomparent/entreprise/entreprise.model';
import { PersonPhysiqiueEntity } from './subcomparent/person-phisique/person-phisique.entity';
import { MineurEntity } from './subcomparent/mineur/mineur.entity';
import { PersonPhisique } from './subcomparent/person-phisique/person-phisique.model';
import { Mineur } from './subcomparent/mineur/mineur.model';
import { Comparent } from './comparent.model';
import { BanqueEntity } from './subcomparent/banque/banque.entity';
import { Banque } from './subcomparent/banque/banque.model';


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
        @InjectRepository(BanqueEntity)
        private banqueRepository: Repository<BanqueEntity>,
    ) { };

    async getAllComparent() {
        const comparents = await this.comparentRepository //.find();
            .createQueryBuilder("comparent")
            .where("comparent.type in ('PP','PPM','PM')")
            .getMany();
        return comparents;
    }

    async getBanques() {
        const banques = await this.comparentRepository
            .createQueryBuilder("comparent")
            .where("comparent.type = 'B'")
            .getMany();
        return banques;
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
        comparent[0].type === 'B' ?
            comparentInfo = await this.banqueRepository.find({ where: { comparent: comparent[0].id } }) : [];


        return { comparent, comparentInfo };
    }

    async createComparent(compa: Comparent, person?: PersonPhisique, entreprise?: Entreprise, mineur?: Mineur) {

        const newComp = await this.comparentRepository.insert(compa);
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


    //  Update raisonSocialeAr


    async updateEntreprise(entre: Entreprise) {

        const entreprise = await this.entrepriseRepository.findOne({ where: { comparent: entre.comparent } });
        entreprise.representant = entre.representant;
        entreprise.raisonSociale = entre.raisonSociale;
        entreprise.raisonSocialeAr = entre.raisonSocialeAr;
        entreprise.ice = entre.ice;
        entreprise.rc = entre.rc;
        entreprise.cnss = entre.cnss;
        entreprise.Adresse = entre.Adresse;
        entreprise.AdresseAr = entre.AdresseAr;
        entreprise.IDF = entre.IDF;
        entreprise.RS = entre.RS;
        entreprise.tel = entre.tel;
        entreprise.capital = entre.capital;

        return this.entrepriseRepository.update(entre.comparent, entreprise)
    }

    async updatePerson(person: PersonPhisique) {
        const personPh = await this.personRepository.findOne({ where: { comparent: person.comparent } })
        personPh.nomFr = person.nomFr;
        personPh.nomAr = person.nomAr;
        personPh.prenomFr = person.prenomFr;
        personPh.prenomAr = person.prenomAr;
        personPh.nationalite = person.nationalite;
        personPh.nationaliteAr = person.nationaliteAr;
        personPh.fonction = person.fonction;
        personPh.fonctionAr = person.fonctionAr;
        personPh.nomPereFr = person.nomPereFr;
        personPh.nomPereAr = person.nomPereAr;
        personPh.nomMereFr = person.nomMereFr;
        personPh.nomMereAr = person.nomMereAr;
        personPh.situation = person.situation;
        personPh.dateNaissance = person.dateNaissance;
        personPh.lieuxNaissance = person.lieuxNaissance;
        personPh.lieuxNaissanceAr = person.lieuxNaissanceAr;
        personPh.nomCompanionFr = person.nomCompanionFr;
        personPh.nomCompanionAr = person.nomCompanionAr;
        personPh.typeIdentification = person.typeIdentification;
        personPh.Identification = person.Identification;
        personPh.IdentificationValable = person.IdentificationValable;
        personPh.tel = person.tel;
        personPh.Adresse = person.Adresse;
        personPh.AdresseAr = person.AdresseAr;

        return this.personRepository.update(person.comparent, personPh);

    }

    async updateMinor(min: Mineur) {
        const minor = await this.mineurRepository.findOne({ where: { comparent: min.comparent } });
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

    async getComparentByName(nom: string) {
        const comparent = await this.comparentRepository.createQueryBuilder("comparent")
            .where("comparent.nom like :nom", { nom: `%${nom}%` })
            .getOne();
        return comparent;
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
            if (comparent.type === 'B') {
                await this.banqueRepository.delete(id);
            }
            await this.comparentRepository.delete(id)
        } else throw new NotFoundException("Comarent Not Found");

        return comparent;
    }



    // service du banques

    async createBanque(banque) {
        return this.banqueRepository.insert(banque);
    }

    async updateBanque(banque) {
        const newBanque = await this.banqueRepository.findOne({ where: { comparent: banque.comparent } });
        if (!newBanque) {
            throw new NotFoundException();
        }
        newBanque.libelle = banque.libelle;
        newBanque.libelleAr = banque.libelleAr;
        newBanque.Agence = banque.Agence;
        newBanque.AgenceAr = banque.AgenceAr;
        newBanque.addresse = banque.addresse;
        newBanque.addresseAr = banque.addresseAr;
        newBanque.tel = banque.tel;
        newBanque.ville = banque.ville;
        newBanque.villeAr = banque.villeAr;
        return await this.banqueRepository.update(banque.id, banque)
    }

}
