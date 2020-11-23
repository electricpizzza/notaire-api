import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import * as multer from 'multer';
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
        destination: './uploads/',
        filename: function (req, file, cb) {
          const uniqueSuffix = file.originalname.split('.')[file.originalname.split.length - 1]
          cb(null, file.fieldname + '-' + (new Date().toISOString()) + '.' + uniqueSuffix)
        }
      })
    })
  )
  uploadFile(@UploadedFile() files, @Body('data') data: string) {
    return files;
  }

  @Get('uploads/:file')
  getFiles(@Param('file') file, @Res() resp) {
    return resp.sendFile(file, { root: 'uploads' })
  }

}
