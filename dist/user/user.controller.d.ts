import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getAllUsers(): Promise<import("./user.entity").UserEntity[]>;
    getOneUser(id: number): Promise<import("./user.entity").UserEntity>;
    registre(email: string, password: string, role: string, nom: string, prenom: string): Promise<import("typeorm").InsertResult>;
    updateUser(id: number, email: string, password: string, role: string, nom: string, prenom: string): Promise<import("typeorm").UpdateResult>;
}
