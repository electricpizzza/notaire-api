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
exports.ArchiveController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const archive_service_1 = require("./archive.service");
const multer = require("multer");
const archive_model_1 = require("./archive.model");
const hummus = require("hummus");
let ArchiveController = class ArchiveController {
    constructor(archiveService) {
        this.archiveService = archiveService;
    }
    getAll() {
        return this.archiveService.getAllArchives();
    }
    getOne(id) {
        return this.archiveService.getOneArchive(id);
    }
    createArchive(titre, description, dossier, files) {
        console.log('test');
        const filesPath = [];
        const today = new Date();
        const mainFile = `./uploads/archive/archive-${titre.replace(' ', '-')}-${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}.pdf`;
        console.log(mainFile);
        const pdfWriter = hummus.createWriter(mainFile);
        files.forEach(file => {
            filesPath.push(file.path);
            if (file.mimetype !== "application/pdf") {
                const page = pdfWriter.createPage(0, 0, 595, 842);
                const ctx = pdfWriter.startPageContentContext(page);
                ctx.drawImage(10, 10, file.path);
                pdfWriter.writePage(page);
            }
            else
                pdfWriter.appendPDFPagesFromPDF(file.path);
        });
        pdfWriter.end();
        console.log("fin");
        const archive = new archive_model_1.default(null, titre, description, filesPath, dossier, mainFile);
        return this.archiveService.createArchive(archive);
    }
    addFilesToArchive(id, files) {
        return this.archiveService.addFileToArchive(id, files);
    }
    updateArchive(id, titre, dossier, files) {
        return this.archiveService.updateArchive(id, titre, dossier, files);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ArchiveController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ArchiveController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    common_1.UseInterceptors(platform_express_1.AnyFilesInterceptor({
        storage: multer.diskStorage({
            destination: './uploads/',
            filename: function (req, file, cb) {
                const uniqueSuffix = file.originalname.split('.')[file.originalname.split.length - 1];
                const today = new Date();
                cb(null, file.originalname.split('.')[0] + '-' + today.getDate() + '-' + today.getMonth() + 1 + '-' + today.getFullYear() + '.' + uniqueSuffix);
            }
        })
    })),
    __param(0, common_1.Body('titre')),
    __param(1, common_1.Body('description')),
    __param(2, common_1.Body('dossier')),
    __param(3, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Object]),
    __metadata("design:returntype", void 0)
], ArchiveController.prototype, "createArchive", null);
__decorate([
    common_1.Post('addFiles/:id'),
    common_1.UseInterceptors(platform_express_1.AnyFilesInterceptor({
        storage: multer.diskStorage({
            destination: './uploads/',
            filename: (req, file, cb) => {
                const uniqueSuffix = file.originalname.split('.')[file.originalname.split.length - 1];
                cb(null, file.originalname.split('.')[0] + '-' + (new Date().toISOString()) + '.' + uniqueSuffix);
            }
        })
    })),
    __param(0, common_1.Param('id')),
    __param(1, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ArchiveController.prototype, "addFilesToArchive", null);
__decorate([
    common_1.Put(':id'),
    common_1.UseInterceptors(platform_express_1.AnyFilesInterceptor({})),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body('titre')),
    __param(2, common_1.Body('dossier')),
    __param(3, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, Number, Object]),
    __metadata("design:returntype", void 0)
], ArchiveController.prototype, "updateArchive", null);
ArchiveController = __decorate([
    common_1.Controller('archive'),
    __metadata("design:paramtypes", [archive_service_1.ArchiveService])
], ArchiveController);
exports.ArchiveController = ArchiveController;
//# sourceMappingURL=archive.controller.js.map