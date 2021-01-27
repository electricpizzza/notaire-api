"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entreprise = void 0;
const comparent_model_1 = require("../../comparent.model");
class Entreprise {
    constructor(comparent, representant, raisonSociale, raisonSocialeAr, ice, rc, cnss, Adresse, AdresseAr, IDF, RS, tel, capital) {
        this.comparent = comparent;
        this.representant = representant;
        this.raisonSociale = raisonSociale;
        this.raisonSocialeAr = raisonSocialeAr;
        this.ice = ice;
        this.rc = rc;
        this.cnss = cnss;
        this.Adresse = Adresse;
        this.AdresseAr = AdresseAr;
        this.IDF = IDF;
        this.RS = RS;
        this.tel = tel;
        this.capital = capital;
    }
    ;
}
exports.Entreprise = Entreprise;
//# sourceMappingURL=entreprise.model.js.map