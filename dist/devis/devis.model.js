"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Devis = void 0;
class Devis {
    constructor(id, reference, termes, dateDevis, client, remisG, total, payment, articles, maitre, link) {
        this.id = id;
        this.reference = reference;
        this.termes = termes;
        this.dateDevis = dateDevis;
        this.client = client;
        this.remisG = remisG;
        this.total = total;
        this.payment = payment;
        this.articles = articles;
        this.maitre = maitre;
        this.link = link;
    }
}
exports.Devis = Devis;
//# sourceMappingURL=devis.model.js.map