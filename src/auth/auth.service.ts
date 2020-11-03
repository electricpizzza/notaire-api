import { Injectable, UnauthorizedException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';

import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService){};


    async singUser(email:string){
       return sign({email},`secretkey`,{ expiresIn: '1h' });
    }

    async validateUser(email: string, password:string){
            
        const user = await this.userService.findOne(email);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }

        throw new UnauthorizedException();
        
    }
}
