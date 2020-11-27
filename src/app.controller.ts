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
    const inovice = new Inovice()
    const articles = [
      {
        ref: 'Ref29/21e',
        description: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs',
        pu: 5000,
        qte: 1,
        total: 5000,
      },
      {
        ref: 'Ref33/23D',
        description: 'thought to have scrambled parts',
        pu: 3000,
        qte: 1,
        total: 2000,
      },
      {
        ref: 'Ref2/SD2',
        description: ' The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts',
        pu: 1000,
        qte: 2,
        total: 3000,
      }
    ];
    const client = {
      address: 'Av Chefchaouni 36'
    }
    inovice.makeInovice('devis', 1232, articles, "Benjelloun", client, "Espece", "12-12-202");
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

  @Get('uploads/:file')
  getFiles(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads' })
  }

}
