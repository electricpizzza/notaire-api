"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Acte = void 0;
const bien_model_1 = require("../bien/bien.model");
const model_model_1 = require("../model/model.model");
class Acte {
    constructor(id, libelle, redacteur, contenu, dateRedaction, fichier, model) {
        this.id = id;
        this.libelle = libelle;
        this.redacteur = redacteur;
        this.contenu = contenu;
        this.dateRedaction = dateRedaction;
        this.fichier = fichier;
        this.model = model;
    }
    ;
}
exports.Acte = Acte;
//# sourceMappingURL=acte.model.js.map