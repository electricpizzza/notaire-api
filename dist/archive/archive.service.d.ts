import { Repository } from 'typeorm';
import { ArchiveEntity } from './archive.entity';
import Archive from './archive.model';
export declare class ArchiveService {
    private archiveRepository;
    constructor(archiveRepository: Repository<ArchiveEntity>);
    getOneArchive(id: number): Promise<ArchiveEntity>;
    getAllArchives(): Promise<ArchiveEntity[]>;
    createArchive(archive: Archive): Promise<import("typeorm").InsertResult>;
    updateArchive(id: number, title: string, dossier: number, file: [any]): Promise<ArchiveEntity>;
    addFileToArchive(id: number, files: any): Promise<ArchiveEntity>;
}
