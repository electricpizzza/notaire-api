import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { User } from './user.model';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }
    allUsers = [
        new User(1, "dinar", "zakariae", "dinar@mail.com", "pass123", "admin", new Date()),
        new User(2, "karim", "rachid", "karim@mail.com", "pass123", "comptable", new Date()),
        new User(3, "amide", "hamid", "amide@mail.com", "pass123", "assistance", new Date()),
    ];

    async login(email: string) {
        const user = await this.allUsers.find(user => user.email === email);
        console.log(user);

        return user;
    }

    async findOneUser(id) {
        const user = await this.userRepository.find({ where: { id } })
        return user;
    }

    async getAllUsers() {
        return await this.allUsers;
        return await this.userRepository.find()
    }

    async createUser(user: User) {
        const newUser = new User(this.allUsers.length, user.nom, user.prenom, user.email, user.password, user.role, new Date())
        this.allUsers.push(newUser)
        //const newUser = await this.userRepository.insert(user);
        return newUser
    }

    async updateUser(user: User) {
        return user;
    }


}
