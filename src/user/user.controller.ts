import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auh.gaurd';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(new AuthGuard())
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getOneUser(@Param('id') id: number) {
        return this.userService.findOneUser(id);
    }

    @Post()
    registre(@Body('email') email: string, @Body('password') password: string, @Body('role') role: string, @Body('nom') nom: string, @Body('prenom') prenom: string) {
        const user = new User(null, nom, prenom, email, password, role, null);
        return this.userService.createUser(user);
    }
}
