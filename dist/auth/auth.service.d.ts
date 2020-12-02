import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private userService;
    constructor(userService: UserService);
    singUser(email: string, role: string): Promise<string>;
    validateUser(email: string, password: string): Promise<{
        id: number;
        nom: string;
        prenom: string;
        email: string;
        role: string;
    }>;
}
