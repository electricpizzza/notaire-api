import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Service } from './service.model';
import { ServiceService } from './service.service';

@Controller('service')
export class ServiceController {
    constructor(private serviceServie: ServiceService) { }

    @Get()
    getAllServices() {
        return this.serviceServie.getAllServices()
    }

    @Get(':id')
    getOneService(@Param('id') id: number) {
        return this.serviceServie.getOneService(id);
    }

    @Post()
    createService(
        @Body('libelle') libelle: string,
        @Body('partie') partie: string,
        @Body('type') type: string,
        @Body('tva') tva: number,
    ) {
        const service = new Service(null, libelle, tva, partie, type);
        return this.serviceServie.createService(service);
    }

    @Put(':id')
    updateService(
        @Param('id') id: number,
        @Body('libelle') libelle: string,
        @Body('partie') partie: string,
        @Body('type') type: string,
        @Body('tva') tva: number,
    ) {
        const service = new Service(id, libelle, tva, partie, type);
        return this.serviceServie.updateService(service);
    }

    @Delete(':id')
    deleteService(@Param('id') id: number) {
        return this.deleteService(id);
    }
}
