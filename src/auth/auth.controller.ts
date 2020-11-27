import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from './auh.gaurd';
import { AuthService } from './auth.service';
import { RolesGuard } from './roles.gaurd';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { };

    @Get()
    // @UseGuards(new AuthGuard())
    @UseGuards(new RolesGuard(['admin', 'assistance']))
    tempUser() {
        return { auth: 'works' };
    }

    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string) {
        const user = await this.authService.validateUser(email, password);
        const token = await this.authService.singUser(email, user.role);

        return { user, token };
    }
}
