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
          cb(null, file.originalname + '-' + (new Date().toISOString()) + '.' + uniqueSuffix)
        }
      })
    })
  )
  uploadFile(@UploadedFile() files, @Body('data') data: string) {


    // const doc = new PDFDocument();
    // doc
    //   .image("./assets/logo.jpeg", 50, 45, { width: 50 })
    //   .fillColor("#444444")
    //   .fontSize(20)
    //   .text("Notary Inc.", 110, 57)
    //   .fontSize(10)
    //   .text("Archive 1", 200, 65, { align: "right" })
    //   .text("Derniere modification : 26/11/2020", 200, 80, { align: "right" })
    //   .moveDown()
    //   .image(files.path, 0).moveDown()
    // doc.addPage()
    //   .image(files.path, 10, 10).moveDown();
    // doc.end();
    // doc.pipe(fs.createWriteStream('./uploads/archive/file.pdf'));

    return files;
  }

  @Get('uploads/:file')
  getFiles(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads' })
  }

}
