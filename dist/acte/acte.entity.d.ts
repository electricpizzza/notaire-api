import { DossierEntity } from "src/dossiers/dossier.entity";
import { ModelEntity } from "src/model/model.entity";
export declare class ActeEntity {
    id: number;
    libelle: string;
    redacteur: string;
    contenu: any;
    dateRedaction: Date;
    fichier: string;
    model: ModelEntity;
    dossier: DossierEntity;
}
