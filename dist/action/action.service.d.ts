import { Repository } from 'typeorm';
import { ActionEntity } from './action.entity';
import { Action } from './action.model';
export declare class ActionService {
    private actionRepository;
    constructor(actionRepository: Repository<ActionEntity>);
    getAllActions(): Promise<ActionEntity[]>;
    getOneAction(id: number): Promise<ActionEntity>;
    getDossierActions(dossier: number): Promise<ActionEntity[]>;
    makeAction(action: Action): Promise<import("typeorm").InsertResult>;
}
