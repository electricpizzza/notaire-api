import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="text-align:center; margin-top:100px;"> <b>Notary</b> - Notaire App!</h1>';
  }
}
