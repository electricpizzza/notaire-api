import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactureEntity } from './facture.entity';
import { Facture } from './facture.model';
import * as hummus from 'hummus'

@Injectable()
export class FactureService {
    constructor(@InjectRepository(FactureEntity) private factureReppository: Repository<FactureEntity>) { }

    async getOneFacture(id: number) {
        const facture = await this.factureReppository.findOne({ where: { id } });
        if (!facture) {
            throw new NotFoundException()
        }
        return facture;
    }

    async getAllFactures() {
        return await this.factureReppository.find();
    }

    async createFacture(facture: Facture) {

        const today = new Date();

        const pdfWriter = hummus.createPdfWriter(`./uploads/factures/facture${facture.id}.pdf`);
        const page = pdfWriter.createPage(0, 0, 595, 842)
        const ctx = pdfWriter.startPageContentContext(page)
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

        pdfWriter.end()
        return await this.factureReppository.insert(facture);
    }

    async anullerFacture(id: number) {
        return await this.factureReppository.delete(id);
    }
}
