import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { User } from './user.model';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) { }

    async login(email: string) {
        const user = await this.userRepository.findOne({ where: { email } })
        if (!user) {
            throw new NotFoundException()
        }
        return user;
    }

    async findOneUser(id) {
        const user = await this.userRepository.findOne({ where: { id } })
        if (!user) {
            throw new NotFoundException()
        }
        return user;
    }

    async getAllUsers() {
        return await this.userRepository.find()
    }

    async createUser(user: User) {
        user.password = await bcrypt.hashSync(user.password, 10);
        const newUser = await this.userRepository.insert(user);
        return newUser
    }

    async updateUser(user: User) {
        const newUser = await this.userRepository.findOne({ where: { id: user.id } });
        if (!newUser) {
            throw new NotFoundException()
        }
        return await this.userRepository.update(user.id, user)
    }


}
