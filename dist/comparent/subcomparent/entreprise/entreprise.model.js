"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entreprise = void 0;
const comparent_model_1 = require("../../comparent.model");
class Entreprise {
    constructor(comparent, representant, raisonSociale, ice, rc, cnss, Adresse) {
        this.comparent = comparent;
        this.representant = representant;
        this.raisonSociale = raisonSociale;
        this.ice = ice;
        this.rc = rc;
        this.cnss = cnss;
        this.Adresse = Adresse;
    }
    ;
}
exports.Entreprise = Entreprise;
//# sourceMappingURL=entreprise.model.js.map