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
exports.FactureService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const facture_entity_1 = require("./facture.entity");
const hummus = require("hummus");
let FactureService = class FactureService {
    constructor(factureReppository) {
        this.factureReppository = factureReppository;
    }
    async getOneFacture(id) {
        const facture = await this.factureReppository.findOne({ where: { id } });
        if (!facture) {
            throw new common_1.NotFoundException();
        }
        return facture;
    }
    async getAllFactures() {
        return await this.factureReppository.find();
    }
    async createFacture(facture) {
        const today = new Date();
        const pdfWriter = hummus.createPdfWriter(`./uploads/factures/facture${facture.id}.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 842);
        const ctx = pdfWriter.startPageContentContext(page);
        const textOptions = {
            font: pdfWriter.getFontForFile('./assets/BrushScriptStd.otf'),
            size: 40,
            colorspace: 'gray',
            color: 0x00
        };
        ctx.drawImage(10, 742, './assets/logo.jpeg', { transformation: { width: 100, height: 100 } })
            .writeText('Archive 1 ', 120, 800, textOptions)
            .writeText(`Date de Creation: ${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`, 320, 800, {
            font: pdfWriter.getFontForFile('./assets/SpecialElite-Regular.ttf'),
            size: 20,
            colorspace: 'gray',
            color: 0x00
        });
        pdfWriter.writePage(page);
        pdfWriter.end();
        return await this.factureReppository.insert(facture);
    }
    async anullerFacture(id) {
        return await this.factureReppository.delete(id);
    }
};
FactureService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(facture_entity_1.FactureEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FactureService);
exports.FactureService = FactureService;
//# sourceMappingURL=facture.service.js.map