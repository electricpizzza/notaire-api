"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    constructor(id, libelle, comptabilite, typeTrans, typePay, comparent, valeur, dateTrans) {
        this.id = id;
        this.libelle = libelle;
        this.comptabilite = comptabilite;
        this.typeTrans = typeTrans;
        this.typePay = typePay;
        this.comparent = comparent;
        this.valeur = valeur;
        this.dateTrans = dateTrans;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.model.js.map