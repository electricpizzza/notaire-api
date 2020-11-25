import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import * as multer from 'multer';
import * as PDFDocument from 'pdfkit'
import * as fs from 'fs'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('files', {
      storage: multer.diskStorage({
        destination: './uploads/archive/trash',
        filename: function (req, file, cb) {
          const uniqueSuffix = file.originalname.split('.')[file.originalname.split.length - 1]
          cb(null, file.fieldname + '-' + (new Date().toISOString()) + '.' + uniqueSuffix)
        }
      })
    })
  )
  uploadFile(@UploadedFile() files, @Body('data') data: string) {
    const doc = new PDFDocument();
    // doc.pipe(res);
    doc
      // .image("logo.png", 50, 45, { width: 50 })
      .fillColor("#444444")
      .fontSize(20)
      .text("ACME Inc.", 110, 57)
      .fontSize(10)
      .text("123 Main Street", 200, 65, { align: "right" })
      .text("New York, NY, 10025", 200, 80, { align: "right" })
      .moveDown();
    doc.image(files.path, 0).moveDown()
      .image(files.path, 0).moveDown()
    doc.end();
    doc.pipe(fs.createWriteStream('./uploads/archive/file.pdf'));

    return files;
  }

  @Get('uploads/:file')
  getFiles(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads' })
  }

}
