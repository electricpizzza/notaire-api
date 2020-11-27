import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt'
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { };


    async singUser(email: string, role: string) {
        return await jwt.sign({ email, role }, `secretkey`, { expiresIn: '1h' });
    }

    async validateUser(email: string, password: string) {

        const user = await this.userService.login(email);

        const rightPassword = await bcrypt.compareSync(password, user.password);
        if (user && rightPassword) {
            const { password, ...result } = user;
            return result;
        }

        throw new UnauthorizedException('Votre E-mail ou mot de pass est un incorrect');

    }
}
