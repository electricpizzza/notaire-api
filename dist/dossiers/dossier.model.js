"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dossier = void 0;
class Dossier {
    constructor(id, identifiant, title, description, nature, libelle, dateOuverture, dateFermeture, NomMaitre, comparents, bien) {
        this.id = id;
        this.identifiant = identifiant;
        this.title = title;
        this.description = description;
        this.nature = nature;
        this.libelle = libelle;
        this.dateOuverture = dateOuverture;
        this.dateFermeture = dateFermeture;
        this.NomMaitre = NomMaitre;
        this.comparents = comparents;
        this.bien = bien;
    }
    ;
}
exports.Dossier = Dossier;
//# sourceMappingURL=dossier.model.js.map