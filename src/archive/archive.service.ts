import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArchiveEntity } from './archive.entity';
import Archive from './archive.model';

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

        const newArchive = await this.archiveRepository.insert({
            titre: archive.titre,
            dossiers: archive.dossiers,
            filesPath: JSON.stringify(archive.filesPath)
        });
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
        const filesPath = JSON.parse(archive.filesPath)
        filesPath.push(...files);
        console.log(filesPath);
        archive.filesPath = JSON.stringify(filesPath)
        this.archiveRepository.save(archive)
        return archive;
    }

}
