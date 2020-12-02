import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    uploadFile(file: any, data: string): any;
    getDevis(file: any, resp: any): any;
    getFacture(file: any, resp: any): any;
    getFile(file: any, resp: any): any;
}
