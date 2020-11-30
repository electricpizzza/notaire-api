import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArchiveEntity } from './archive.entity';
import Archive from './archive.model';
import * as hummus from 'hummus'


@Injectable()
export class ArchiveService {
    constructor(
        @InjectRepository(ArchiveEntity) private archiveRepository: Repository<ArchiveEntity>
    ) { }

    async getOneArchive(id: number) {
        const archive = await this.archiveRepository.findOne({ where: { id } });
        if (!archive) throw new NotFoundException();
        return archive;
    }

    async getAllArchives() {
        const archives = await this.archiveRepository.find();
        return archives;
    }

    async createArchive(archive: Archive) {

        const newArchive = await this.archiveRepository.insert(archive);
        return newArchive;
    }

    async updateArchive(id: number, title: string, dossier: number, file: [any]) {
        const archive = await this.archiveRepository.findOne({ where: { id } });
        if (!archive) throw new NotFoundException();
        return archive;
    }

    async addFileToArchive(id: number, files) {
        const archive = await this.archiveRepository.findOne({ where: { id } });
        if (!archive) throw new NotFoundException();
        const filesPath = []
        const pdfWriter = hummus.createWriterToModify(archive.mainFile);
        files.forEach(file => {
            filesPath.push(file.path);
            if (file.mimetype !== "application/pdf") {
                const page = pdfWriter.createPage(0, 0, 595, 842)
                const cxt = pdfWriter.startPageContentContext(page);
                cxt.drawImage(10, 10, file.path);
                pdfWriter.writePage(page);
            } else
                pdfWriter.appendPDFPagesFromPDF(file.path);
        });
        pdfWriter.end()

        archive.filesPath.push(...filesPath);
        this.archiveRepository.save(archive)
        return archive;
    }

}
