import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class RolesGuard implements CanActivate {
    private roles;
    constructor(roles: string[]);
    canActivate(context: ExecutionContext): Promise<boolean>;
    matchRoles(roles: string[], usrRole: any): Promise<boolean>;
    validateToken(auth: string): Promise<string | object>;
}
