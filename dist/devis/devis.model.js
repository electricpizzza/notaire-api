"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Devis = void 0;
class Devis {
    constructor(id, termes, dateDevis, client, remisG, total, articles, maitre) {
        this.id = id;
        this.termes = termes;
        this.dateDevis = dateDevis;
        this.client = client;
        this.remisG = remisG;
        this.total = total;
        this.articles = articles;
        this.maitre = maitre;
    }
}
exports.Devis = Devis;
//# sourceMappingURL=devis.model.js.map