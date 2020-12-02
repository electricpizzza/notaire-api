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
const platform_express_1 = require("@nestjs/platform-express");
const app_service_1 = require("./app.service");
const multer = require("multer");
const hummus = require("hummus");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return process.env.APP_NAME;
        return this.appService.getHello();
    }
    uploadFile(file, data) {
        const pdfWriter = hummus.createWriter('./uploads/archive/archive.pdf');
        const page = pdfWriter.createPage(0, 0, 595, 842);
        const ctx = pdfWriter.startPageContentContext(page);
        ctx.drawImage(10, 742, './assets/logo.jpeg', { transformation: { width: 100, height: 100 } });
        const textOptions = { size: 104, colorspace: 'gray', color: 0x00 };
        ctx.writeText("text text", 120, 512, textOptions);
        pdfWriter.writePage(page);
        pdfWriter.end();
        return file;
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
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('files', {
        storage: multer.diskStorage({
            destination: './uploads/archive/trash',
            filename: function (req, file, cb) {
                const uniqueSuffix = file.originalname.split('.')[file.originalname.split.length - 1];
                cb(null, file.originalname + '-' + (new Date().toISOString()) + '.' + uniqueSuffix);
            }
        })
    })),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Body('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile", null);
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
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map