"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const transaction_model_1 = require("./transaction.model");
const transaction_service_1 = require("./transaction.service");
let TransactionController = class TransactionController {
    constructor(transactionService) {
        this.transactionService = transactionService;
    }
    getAll() {
        return this.transactionService.getallTransactions();
    }
    getOneTrans(id) {
        return this.transactionService.getOneTransaction(id);
    }
    getByComptabilite(compta) {
        return this.transactionService.getTransactionByCompta(compta);
    }
    makeTransaction(comptabilite, typeTrans, libelle, typePay, comparent, valeur) {
        const trans = new transaction_model_1.Transaction(null, libelle, comptabilite, typeTrans, typePay, comparent, valeur, new Date());
        return this.transactionService.makeTransaction(trans);
    }
    updateTransaction(id, comptabilite, libelle, typeTrans, typePay, comparent, valeur) {
        const trans = new transaction_model_1.Transaction(id, libelle, comptabilite, typeTrans, typePay, comparent, valeur, new Date());
        return this.transactionService.updateTransaction(trans);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getOneTrans", null);
__decorate([
    common_1.Get('/comptabilite/:compta'),
    __param(0, common_1.Param('compta')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getByComptabilite", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('comptabilite')),
    __param(1, common_1.Body('typeTrans')),
    __param(2, common_1.Body('libelle')),
    __param(3, common_1.Body('typePay')),
    __param(4, common_1.Body('comparent')),
    __param(5, common_1.Body('valeur')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "makeTransaction", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('comptabilite')),
    __param(2, common_1.Body('libelle')),
    __param(3, common_1.Body('typeTrans')),
    __param(4, common_1.Body('typePay')),
    __param(5, common_1.Body('comparent')),
    __param(6, common_1.Body('valeur')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String, String, Number, Number]),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "updateTransaction", null);
TransactionController = __decorate([
    common_1.Controller('transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map