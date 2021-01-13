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
exports.ServiceController = void 0;
const common_1 = require("@nestjs/common");
const service_model_1 = require("./service.model");
const service_service_1 = require("./service.service");
let ServiceController = class ServiceController {
    constructor(serviceServie) {
        this.serviceServie = serviceServie;
    }
    getAllServices() {
        return this.serviceServie.getAllServices();
    }
    getOneService(id) {
        return this.serviceServie.getOneService(id);
    }
    createService(libelle, partie, type, tva) {
        const service = new service_model_1.Service(null, libelle, tva, partie, type);
        return this.serviceServie.createService(service);
    }
    updateService(id, libelle, partie, type, tva) {
        const service = new service_model_1.Service(id, libelle, tva, partie, type);
        return this.serviceServie.updateService(service);
    }
    deleteService(id) {
        return this.deleteService(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "getAllServices", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "getOneService", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('libelle')),
    __param(1, common_1.Body('partie')),
    __param(2, common_1.Body('type')),
    __param(3, common_1.Body('tva')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "createService", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('libelle')),
    __param(2, common_1.Body('partie')),
    __param(3, common_1.Body('type')),
    __param(4, common_1.Body('tva')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, Number]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "updateService", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ServiceController.prototype, "deleteService", null);
ServiceController = __decorate([
    common_1.Controller('service'),
    __metadata("design:paramtypes", [service_service_1.ServiceService])
], ServiceController);
exports.ServiceController = ServiceController;
//# sourceMappingURL=service.controller.js.map