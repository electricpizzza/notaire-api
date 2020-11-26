import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import * as multer from 'multer';
import * as hummus from 'hummus'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    //    ./uploads/cadetaf.pdf-2020-11-25T14:43:35.789Z.pdf
    //    ./uploads/archive/file.pdf

    const today = new Date();
    const pdfWriter = hummus.createWriter('./uploads/archive/file2.pdf');
    const page = pdfWriter.createPage(0, 0, 595, 842)
    const cxt = pdfWriter.startPageContentContext(page);
    const textOptions = {
      font: pdfWriter.getFontForFile('./assets/BrushScriptStd.otf'),
      size: 40,
      colorspace: 'gray',
      color: 0x00
    };
    cxt.drawImage(10, 742, './assets/logo.jpeg', { transformation: { width: 100, height: 100 } })
      .writeText('Archive 1 ', 120, 800, textOptions)
      .writeText(`Date de Creation: ${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`, 320, 800, {
        font: pdfWriter.getFontForFile('./assets/BrushScriptStd.otf'),
        size: 20,
        colorspace: 'gray',
        color: 0x00
      })
    cxt.drawImage(10, 10, './uploads/archive/trash/exemple-de-devis-escalier.png-2020-11-26T13:34:04.678Z.png');
    pdfWriter.writePage(page);

    pdfWriter.end()

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
