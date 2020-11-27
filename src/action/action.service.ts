import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ActionEntity } from './action.entity';
import { Action } from './action.model';

@Injectable()
export class ActionService {
    constructor(@InjectRepository(ActionEntity) private actionRepository: Repository<ActionEntity>) { }


    async getAllActions() {
        return await this.actionRepository.find();
    }

    async getOneAction(id: number) {
        return await this.actionRepository.findOne(id)
    }

    async getDossierActions(dossier: number) {
        return await this.actionRepository.find({ where: { dossier } })
    }

    async makeAction(action: Action) {
        return await this.actionRepository.insert(action);
    }
}
