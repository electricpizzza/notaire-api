import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import * as multer from 'multer';
import * as hummus from 'hummus'
import { Inovice } from './inovice';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('data')
  getData() {
    return this.appService.getData();
  }
  /**
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
    uploadFile(@UploadedFile() file, @Body('data') data: string) {
  
      const pdfWriter = hummus.createWriter('./uploads/archive/archive.pdf');
      const page = pdfWriter.createPage(0, 0, 595, 842);
      const ctx = pdfWriter.startPageContentContext(page)
      // ctx.drawImage(120, 120, file.path)
      ctx.drawImage(10, 742, './assets/logo.jpeg', { transformation: { width: 100, height: 100 } })
      const textOptions = { size: 104, colorspace: 'gray', color: 0x00 };
      ctx.writeText("text text", 120, 512, textOptions);
      pdfWriter.writePage(page);
      pdfWriter.end();
      return file;
    }
     */

  @Get('uploads/devis/:file')
  getDevis(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads/devis' })
  }


  @Get('uploads/factures/:file')
  getFacture(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads/factures' })
  }

  @Get('uploads/:file')
  getFile(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads' })
  }

  @Get('uploads/archive/:file')
  getArchive(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads/archive' })
  }

  @Get('uploads/recu/:file')
  getRecu(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads/recu' })
  }

  @Post('/recu')
  createRecu(
    @Body('client') client: string,
    @Body('libelle') libelle: string,
    @Body('somme') somme: number,
    @Body('dateTrans') dateTrans: string,
    @Body('numCheque') numCheque: number,
    @Body('typePay') typePay: string,
  ) {
    const invoice = new Inovice();
    return invoice.createRecu('ZAKARIAE DINAR', somme, libelle, dateTrans, numCheque, typePay)
  }

}