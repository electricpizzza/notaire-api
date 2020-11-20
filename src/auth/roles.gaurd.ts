import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private roles: string[]) { }
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = await context.switchToHttp().getRequest();

        if (!request.headers.authorization) {
            return false;
        }
        request.user = await this.validateToken(request.headers.authorization);
        const user = request.user;
        return await this.matchRoles(this.roles, user.role);
    }


    async matchRoles(roles: string[], usrRole) {
        const allowed = roles.find(role => role === usrRole) ? true : false;
        if (!allowed) {
            throw new ForbiddenException(`'${usrRole.toUpperCase()}' n'a pas l'access à ces donneés`)
        }
        return allowed;
    }

    async validateToken(auth: string) {
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new ForbiddenException()
        }
        const token = auth.split(' ')[1];
        try {
            const decoded = await jwt.verify(token, 'secretkey')
            return decoded;
        } catch (error) {
            const errMsg = 'Token Error :' + (error.message || error.name)
            throw new ForbiddenException(errMsg);
        }

    }
}
