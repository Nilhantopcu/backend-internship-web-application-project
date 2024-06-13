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
exports.JwtAuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const auth_service_1 = require("./auth.service");
let JwtAuthMiddleware = class JwtAuthMiddleware {
    constructor(jwtService, authService) {
        this.jwtService = jwtService;
        this.authService = authService;
    }
    async use(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            console.log('Authorization header not found');
            throw new common_1.UnauthorizedException('Authorization header not found');
        }
        const [bearer, token] = authHeader.split(' ');
        if (bearer !== 'Bearer' || !token) {
            console.log('Invalid token format');
            throw new common_1.UnauthorizedException('Invalid token format');
        }
        try {
            const decoded = this.jwtService.verify(token);
            const user = await this.authService.getUserByEmail(decoded.email);
            if (!user) {
                console.log('User not found for email:', decoded.email);
                throw new common_1.UnauthorizedException('User not found');
            }
            req.user = user;
            next();
        }
        catch (error) {
            console.log('Invalid token', error);
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.JwtAuthMiddleware = JwtAuthMiddleware;
exports.JwtAuthMiddleware = JwtAuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        auth_service_1.AuthService])
], JwtAuthMiddleware);
//# sourceMappingURL=jwt-auth.middleware.js.map