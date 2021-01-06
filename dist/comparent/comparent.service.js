"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const comparent_entity_1 = require("./comparent.entity");
const typeorm_2 = require("@nestjs/typeorm");
const entreprise_entity_1 = require("./subcomparent/entreprise/entreprise.entity");
const person_phisique_entity_1 = require("./subcomparent/person-phisique/person-phisique.entity");
const mineur_entity_1 = require("./subcomparent/mineur/mineur.entity");
let ComparentService = class ComparentService {
    constructor(comparentRepository, entrepriseRepository, personRepository, mineurRepository) {
        this.comparentRepository = comparentRepository;
        this.entrepriseRepository = entrepriseRepository;
        this.personRepository = personRepository;
        this.mineurRepository = mineurRepository;
    }
    ;
    async getAllComparent() {
        const comparents = await this.comparentRepository.find();
        return comparents;
    }
    async getOneComparent(id) {
        const comparent = await this.comparentRepository.find({ where: { id } });
        if (!comparent) {
            throw new common_1.NotFoundException("Comarent Not Found");
        }
        let comparentInfo;
        comparent[0].type === 'PP' ?
            comparentInfo = await this.personRepository.find({ where: { comparent: comparent[0].id } }) : [];
        comparent[0].type === 'PM' ?
            comparentInfo = await this.entrepriseRepository.find({ where: { comparent: comparent[0].id } }) : [];
        comparent[0].type === 'PPM' ?
            comparentInfo = await this.mineurRepository.find({ where: { comparent: comparent[0].id } }) : [];
        return { comparent, comparentInfo };
    }
    async createComparent(compa, person, entreprise, mineur) {
        const newComp = await this.comparentRepository.insert(compa);
        return newComp;
    }
    async updateComparent(id, compa, person, entreprise, mineur) {
        const comparent = this.comparentRepository.find({ where: { id } });
        if (!comparent) {
            throw new common_1.NotFoundException("Comarent Not Found");
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
    async updateEntreprise(entre) {
        const entreprise = this.entrepriseRepository.update(entre.comparent, entre);
        return entreprise;
    }
    async updatePerson(person) {
        const personPh = await this.personRepository.findOne({ where: { comparent: person.comparent } });
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
    async updateMinor(min) {
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
    async getComparentByName(nom) {
        const comparent = await this.comparentRepository.createQueryBuilder("comparent")
            .where("comparent.nom like :nom", { nom: `%${nom}%` })
            .getOne();
        return comparent;
    }
    async deleteComparent(id) {
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
            await this.comparentRepository.delete(id);
        }
        else
            throw new common_1.NotFoundException("Comarent Not Found");
        return comparent;
    }
};
ComparentService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(comparent_entity_1.ComparentEntity)),
    __param(1, typeorm_2.InjectRepository(entreprise_entity_1.EntrepriseCom)),
    __param(2, typeorm_2.InjectRepository(person_phisique_entity_1.PersonPhysiqiueEntity)),
    __param(3, typeorm_2.InjectRepository(mineur_entity_1.MineurEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.Repository])
], ComparentService);
exports.ComparentService = ComparentService;
//# sourceMappingURL=comparent.service.js.map