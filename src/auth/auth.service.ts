import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { };


    async singUser(email: string, role: string) {
        return await jwt.sign({ email, role }, `secretkey`, { expiresIn: '1h' });
    }

    async validateUser(email: string, password: string) {

        const user = await this.userService.login(email);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }

        throw new UnauthorizedException();

    }
}
