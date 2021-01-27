import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { Aveu } from './aveu.model';
import { AveuService } from './aveu.service';

@Controller('aveu')
export class AveuController {
    constructor(private readonly aveuService: AveuService) { }

    @Get()
    getAll() {
        return this.aveuService.getAllAveu();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.aveuService.getOneAveu(id);
    }

    @Post()
    createAveu(
        @Body('comparent') comparent: number,
        @Body('bien') bien: number,
        @Body('status') status: string,
        @Body('partieChp') partieChp: any,
        @Body('partieStr') partieStr: string,
        @Body('recu') recu: any,
    ) {
        const aveu = new Aveu(null, comparent, bien, status, partieChp, partieStr, recu)
        return this.aveuService.createAveu(aveu);
    }

    @Put(':id')
    updateAveu(
        @Param('id') id: number,
        @Body('comparent') comparent: number,
        @Body('bien') bien: number,
        @Body('status') status: string,
        @Body('partieChp') partieChp: any,
        @Body('partieStr') partieStr: string,
        @Body('recu') recu: any,
    ) {
        const aveu = new Aveu(id, comparent, bien, status, partieChp, partieStr, recu);
        return this.aveuService.updateAveu(aveu);
    }

    @Delete(':id')
    deleteAveu(@Param('id') id: number) {
        return this.aveuService.deleteAveu(id);
    }
}
