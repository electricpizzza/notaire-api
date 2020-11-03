import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){};
    
    @Get()
    @UseGuards(AuthGuard('local'))
    tempUser(){
        return { auth: 'works' };
    }

    @Post('login')
    async login(@Body('email') email:string, @Body('password') password: string){
        const user = await this.authService.validateUser(email,password);
        const token = await this.authService.singUser(email);

        return { user, token };
    }
}
