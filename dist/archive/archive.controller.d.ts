import { ArchiveService } from './archive.service';
export declare class ArchiveController {
    private readonly archiveService;
    constructor(archiveService: ArchiveService);
    getAll(): Promise<import("./archive.entity").ArchiveEntity[]>;
    getOne(id: number): Promise<import("./archive.entity").ArchiveEntity>;
    createArchive(titre: string, description: string, dossier: number, files: any): Promise<import("typeorm").InsertResult>;
    addFilesToArchive(id: number, files: any): Promise<import("./archive.entity").ArchiveEntity>;
    updateArchive(id: number, titre: string, dossier: number, files: any): Promise<import("./archive.entity").ArchiveEntity>;
}
