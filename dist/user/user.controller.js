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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const roles_gaurd_1 = require("../auth/roles.gaurd");
const user_model_1 = require("./user.model");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getAllUsers() {
        return this.userService.getAllUsers();
    }
    getOneUser(id) {
        return this.userService.findOneUser(id);
    }
    registre(email, password, role, nom, prenom) {
        const user = new user_model_1.User(null, nom, prenom, email, password, role);
        return this.userService.createUser(user);
    }
    updateUser(id, email, password, role, nom, prenom) {
        const user = new user_model_1.User(id, nom, prenom, email, password, role);
        return this.userService.updateUser(user);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllUsers", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOneUser", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body('email')), __param(1, common_1.Body('password')), __param(2, common_1.Body('role')), __param(3, common_1.Body('nom')), __param(4, common_1.Body('prenom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "registre", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body('email')), __param(2, common_1.Body('password')), __param(3, common_1.Body('role')), __param(4, common_1.Body('nom')), __param(5, common_1.Body('prenom')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    common_1.Controller('user'),
    common_1.UseGuards(new roles_gaurd_1.RolesGuard(['admin', 'assistance'])),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map