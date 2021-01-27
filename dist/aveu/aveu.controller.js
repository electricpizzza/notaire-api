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
exports.AveuController = void 0;
const common_1 = require("@nestjs/common");
const aveu_model_1 = require("./aveu.model");
const aveu_service_1 = require("./aveu.service");
let AveuController = class AveuController {
    constructor(aveuService) {
        this.aveuService = aveuService;
    }
    getAll() {
        return this.aveuService.getAllAveu();
    }
    getOne(id) {
        return this.aveuService.getOneAveu(id);
    }
    createAveu(comparent, bien, status, partieChp, partieStr, recu) {
        const aveu = new aveu_model_1.Aveu(null, comparent, bien, status, partieChp, partieStr, recu);
        return this.aveuService.createAveu(aveu);
    }
    updateAveu(id, comparent, bien, status, partieChp, partieStr, recu) {
        const aveu = new aveu_model_1.Aveu(id, comparent, bien, status, partieChp, partieStr, recu);
        return this.aveuService.updateAveu(aveu);
    }
    deleteAveu(id) {
        return this.aveuService.deleteAveu(id);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AveuController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AveuController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('comparent')),
    __param(1, common_1.Body('bien')),
    __param(2, common_1.Body('status')),
    __param(3, common_1.Body('partieChp')),
    __param(4, common_1.Body('partieStr')),
    __param(5, common_1.Body('recu')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Object, String, Object]),
    __metadata("design:returntype", void 0)
], AveuController.prototype, "createAveu", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('comparent')),
    __param(2, common_1.Body('bien')),
    __param(3, common_1.Body('status')),
    __param(4, common_1.Body('partieChp')),
    __param(5, common_1.Body('partieStr')),
    __param(6, common_1.Body('recu')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, String, Object, String, Object]),
    __metadata("design:returntype", void 0)
], AveuController.prototype, "updateAveu", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AveuController.prototype, "deleteAveu", null);
AveuController = __decorate([
    common_1.Controller('aveu'),
    __metadata("design:paramtypes", [aveu_service_1.AveuService])
], AveuController);
exports.AveuController = AveuController;
//# sourceMappingURL=aveu.controller.js.map