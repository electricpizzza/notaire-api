import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthGuard implements CanActivate {
    async canActivate(
        context: ExecutionContext,
    ): Promise<boolean> {
        const request = await context.switchToHttp().getRequest();

        if (!request.headers.authorization) {
            return false;
        }
        request.user = await this.validateToken(request.headers.authorization);
        return true;
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