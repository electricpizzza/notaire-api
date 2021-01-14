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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const inovice_1 = require("./inovice");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getData() {
        return this.appService.getData();
    }
    getDevis(file, resp) {
        return resp.sendFile(file, { root: 'uploads/devis' });
    }
    getFacture(file, resp) {
        return resp.sendFile(file, { root: 'uploads/factures' });
    }
    getFile(file, resp) {
        return resp.sendFile(file, { root: 'uploads' });
    }
    getArchive(file, resp) {
        return resp.sendFile(file, { root: 'uploads/archive' });
    }
    getRecu(file, resp) {
        return resp.sendFile(file, { root: 'uploads/recu' });
    }
    createRecu(client, libelle, somme, dateTrans, numCheque, typePay) {
        const invoice = new inovice_1.Inovice();
        return invoice.createRecu('ZAKARIAE DINAR', somme, libelle, dateTrans, numCheque, typePay);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Get('data'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
__decorate([
    common_1.Get('uploads/devis/:file'),
    __param(0, common_1.Param('file')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getDevis", null);
__decorate([
    common_1.Get('uploads/factures/:file'),
    __param(0, common_1.Param('file')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getFacture", null);
__decorate([
    common_1.Get('uploads/:file'),
    __param(0, common_1.Param('file')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getFile", null);
__decorate([
    common_1.Get('uploads/archive/:file'),
    __param(0, common_1.Param('file')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getArchive", null);
__decorate([
    common_1.Get('uploads/recu/:file'),
    __param(0, common_1.Param('file')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRecu", null);
__decorate([
    common_1.Post('/recu'),
    __param(0, common_1.Body('client')),
    __param(1, common_1.Body('libelle')),
    __param(2, common_1.Body('somme')),
    __param(3, common_1.Body('dateTrans')),
    __param(4, common_1.Body('numCheque')),
    __param(5, common_1.Body('typePay')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, String, Number, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createRecu", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map