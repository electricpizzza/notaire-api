"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facture = void 0;
class Facture {
    constructor(id, reference, termes, dateFacture, client, remisG, total, payment, articles, maitre, link) {
        this.id = id;
        this.reference = reference;
        this.termes = termes;
        this.dateFacture = dateFacture;
        this.client = client;
        this.remisG = remisG;
        this.total = total;
        this.payment = payment;
        this.articles = articles;
        this.maitre = maitre;
        this.link = link;
    }
    ;
}
exports.Facture = Facture;
//# sourceMappingURL=facture.model.js.map