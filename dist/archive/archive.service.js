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
exports.ArchiveService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const archive_entity_1 = require("./archive.entity");
const hummus = require("hummus");
let ArchiveService = class ArchiveService {
    constructor(archiveRepository) {
        this.archiveRepository = archiveRepository;
    }
    async getOneArchive(id) {
        const archive = await this.archiveRepository.findOne({ where: { id } });
        if (!archive)
            throw new common_1.NotFoundException();
        return archive;
    }
    async getAllArchives() {
        const archives = await this.archiveRepository.find();
        return archives;
    }
    async createArchive(archive) {
        const newArchive = await this.archiveRepository.insert(archive);
        return newArchive;
    }
    async updateArchive(id, title, dossier, file) {
        const archive = await this.archiveRepository.findOne({ where: { id } });
        if (!archive)
            throw new common_1.NotFoundException();
        return archive;
    }
    async addFileToArchive(id, files) {
        const archive = await this.archiveRepository.findOne({ where: { id } });
        if (!archive)
            throw new common_1.NotFoundException();
        const filesPath = [];
        const pdfWriter = hummus.createWriterToModify(archive.mainFile);
        files.forEach(file => {
            filesPath.push(file.path);
            if (file.mimetype !== "application/pdf") {
                const page = pdfWriter.createPage(0, 0, 595, 842);
                const cxt = pdfWriter.startPageContentContext(page);
                cxt.drawImage(10, 10, file.path);
                pdfWriter.writePage(page);
            }
            else
                pdfWriter.appendPDFPagesFromPDF(file.path);
        });
        pdfWriter.end();
        archive.filesPath.push(...filesPath);
        this.archiveRepository.save(archive);
        return archive;
    }
};
ArchiveService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(archive_entity_1.ArchiveEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ArchiveService);
exports.ArchiveService = ArchiveService;
//# sourceMappingURL=archive.service.js.map