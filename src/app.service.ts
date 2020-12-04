import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="text-align:center; margin-top:100px;"> <b>Notary</b> - Notaire App!</h1>';
  }
  async getData() {
    const data = await fs.readFileSync('assets/data.json', 'utf8');
    return JSON.parse(data);
  }
}
