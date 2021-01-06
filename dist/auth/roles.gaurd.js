"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
let RolesGuard = class RolesGuard {
    constructor(roles) {
        this.roles = roles;
    }
    async canActivate(context) {
        const request = await context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            return false;
        }
        request.user = await this.validateToken(request.headers.authorization);
        const user = request.user;
        return await this.matchRoles(this.roles, user.role);
    }
    async matchRoles(roles, usrRole) {
        const allowed = roles.find(role => role === usrRole) ? true : false;
        if (!allowed) {
            throw new common_1.ForbiddenException(`'${usrRole.toUpperCase()}' n'a pas l'access à ces donneés`);
        }
        return allowed;
    }
    async validateToken(auth) {
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new common_1.ForbiddenException();
        }
        const token = auth.split(' ')[1];
        try {
            const decoded = await jwt.verify(token, 'secretkey');
            return decoded;
        }
        catch (error) {
            const errMsg = 'Token Error :' + (error.message || error.name);
            throw new common_1.ForbiddenException(errMsg);
        }
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Array])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.gaurd.js.map