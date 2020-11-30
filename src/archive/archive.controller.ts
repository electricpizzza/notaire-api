import { Body, Controller, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ArchiveService } from './archive.service';
import * as multer from 'multer';
import Archive from './archive.model';
import * as hummus from 'hummus'

@Controller('archive')
export class ArchiveController {
    constructor(private readonly archiveService: ArchiveService) { }

    @Get()
    getAll() {
        return this.archiveService.getAllArchives();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.archiveService.getOneArchive(id);
    }

    @Post()
    @UseInterceptors(AnyFilesInterceptor({
        storage: multer.diskStorage({
            destination: './uploads/',
            filename: function (req, file, cb) {
                const uniqueSuffix = file.originalname.split('.')[file.originalname.split.length - 1]
                cb(null, file.originalname + '-' + (new Date().toISOString()) + '.' + uniqueSuffix)
            }
        })
    }))
    createArchive(
        @Body('titre') titre: string,
        @Body('description') description: string,
        @Body('dossier') dossier: number,
        @UploadedFiles() files
    ) {
        const filesPath = []
        const today = new Date();
        const mainFile = `./uploads/archive/archive-${titre.replace(' ', '-')}-${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}.pdf`;
        const pdfWriter = hummus.createWriter(mainFile);
        files.forEach(file => {
            filesPath.push(file.path);
            if (file.mimetype !== "application/pdf") {
                const page = pdfWriter.createPage(0, 0, 595, 842);
                const ctx = pdfWriter.startPageContentContext(page)
                ctx.drawImage(10, 10, file.path)
                pdfWriter.writePage(page);
            } else
                pdfWriter.appendPDFPagesFromPDF(file.path)
        });
        pdfWriter.end();
        const archive = new Archive(null, titre, description, filesPath, dossier, mainFile)
        return this.archiveService.createArchive(archive);
    }

    @Post('addFiles/:id')
    @UseInterceptors(AnyFilesInterceptor({
        storage: multer.diskStorage({
            destination: './uploads/',
            filename: (req, file, cb) => {
                const uniqueSuffix = file.originalname.split('.')[file.originalname.split.length - 1]
                cb(null, file.originalname + '-' + (new Date().toISOString()) + '.' + uniqueSuffix)
            }
        })
    }))
    addFilesToArchive(
        @Param('id') id: number,
        @UploadedFiles() files
    ) {
        return this.archiveService.addFileToArchive(id, files)
    }


    @Put(':id')
    @UseInterceptors(AnyFilesInterceptor({

    }))
    updateArchive(
        @Param('id') id: number,
        @Body('titre') titre: string,
        @Body('dossier') dossier: number,
        @UploadedFiles() files
    ) {
        return this.archiveService.updateArchive(id, titre, dossier, files);
    }
}
