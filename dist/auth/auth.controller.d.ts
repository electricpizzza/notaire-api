import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    tempUser(): {
        auth: string;
    };
    login(email: string, password: string): Promise<{
        user: {
            id: number;
            nom: string;
            prenom: string;
            email: string;
            role: string;
        };
        token: string;
    }>;
}
