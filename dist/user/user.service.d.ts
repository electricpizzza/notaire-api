import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { User } from './user.model';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    login(email: string): Promise<UserEntity>;
    findOneUser(id: any): Promise<UserEntity>;
    getAllUsers(): Promise<UserEntity[]>;
    createUser(user: User): Promise<import("typeorm").InsertResult>;
    updateUser(user: User): Promise<import("typeorm").UpdateResult>;
}
