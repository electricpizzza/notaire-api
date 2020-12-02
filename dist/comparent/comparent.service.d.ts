import { Repository } from 'typeorm';
import { ComparentEntity } from './comparent.entity';
import { Entreprise } from './subcomparent/entreprise/entreprise.model';
import { PersonPhysiqiueEntity } from './subcomparent/person-phisique/person-phisique.entity';
import { MineurEntity } from './subcomparent/mineur/mineur.entity';
import { PersonPhisique } from './subcomparent/person-phisique/person-phisique.model';
import { Mineur } from './subcomparent/mineur/mineur.model';
import { Comparent } from './comparent.model';
export declare class ComparentService {
    private comparentRepository;
    private entrepriseRepository;
    private personRepository;
    private mineurRepository;
    constructor(comparentRepository: Repository<ComparentEntity>, entrepriseRepository: Repository<Entreprise>, personRepository: Repository<PersonPhysiqiueEntity>, mineurRepository: Repository<MineurEntity>);
    getAllComparent(): Promise<ComparentEntity[]>;
    getOneComparent(id: number): Promise<{
        comparent: ComparentEntity[];
        comparentInfo: any;
    }>;
    createComparent(compa: Comparent, person?: PersonPhisique, entreprise?: Entreprise, mineur?: Mineur): Promise<import("typeorm").InsertResult>;
    updateComparent(id: number, compa: Comparent, person?: PersonPhisique, entreprise?: Entreprise, mineur?: Mineur): Promise<ComparentEntity[]>;
    createEntreprise(entreprise: any): Promise<import("typeorm").InsertResult>;
    createPersonne(personne: any): Promise<import("typeorm").InsertResult>;
    createMineur(mineur: any): Promise<import("typeorm").InsertResult>;
    updateEntreprise(entre: Entreprise): Promise<import("typeorm").UpdateResult>;
    updatePerson(person: PersonPhisique): Promise<import("typeorm").UpdateResult>;
    updateMinor(min: Mineur): Promise<import("typeorm").UpdateResult>;
    deleteComparent(id: number): Promise<ComparentEntity>;
}
