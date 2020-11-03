import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
    allUsers = [
        new User(1,"dinar","zakariae","dinar@mail.com", "pass123", new Date()),
        new User(1,"karim","rachid","karim@mail.com", "pass123", new Date()),
        new User(1,"amide","hamid","amide@mail.com", "pass123", new Date()),
    ];

    async findOne(email: string){
        return await this.allUsers.find(user => user.email = email);
    }

}
