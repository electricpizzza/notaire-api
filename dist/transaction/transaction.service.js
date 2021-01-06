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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transaction_entity_1 = require("./transaction.entity");
let TransactionService = class TransactionService {
    constructor(transactionRepositry) {
        this.transactionRepositry = transactionRepositry;
    }
    async getallTransactions() {
        return await this.transactionRepositry.find();
    }
    async getOneTransaction(id) {
        const trans = await this.transactionRepositry.findOne({ where: { id } });
        if (!trans) {
            throw new common_1.NotFoundException();
        }
        return trans;
    }
    async getTransactionByCompta(compta) {
        const trans = await this.transactionRepositry.find({ where: { comptabilite: compta } });
        if (!trans) {
            throw new common_1.NotFoundException();
        }
        return trans;
    }
    async makeTransaction(trans) {
        return await this.transactionRepositry.insert(trans);
    }
    async updateTransaction(trans) {
        const newTrans = await this.transactionRepositry.findOne({ where: { id: trans.id } });
        if (!newTrans) {
            throw new common_1.NotFoundException();
        }
        return await this.transactionRepositry.update(trans.id, trans);
    }
    async cancelTransaction(id) {
        return await this.transactionRepositry.delete(id);
    }
};
TransactionService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(transaction_entity_1.TransactionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map