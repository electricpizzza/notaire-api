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
    const articles = [
      { ref: 'REF23', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like" },
      { ref: 'RE5F45', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like" },
      { ref: 'REF444', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like" },
      { ref: 'REF3460', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like" },
    ]
    const inovice = new Inovice();
    //inovice.testNewpage(articles);

    return this.appService.getHello();
  }

  @Get('data')
  getData() {
    return this.appService.getData();
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

}