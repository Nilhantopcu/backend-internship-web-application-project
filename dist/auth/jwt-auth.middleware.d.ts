import { NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
export declare class JwtAuthMiddleware implements NestMiddleware {
    private readonly jwtService;
    private readonly authService;
    constructor(jwtService: JwtService, authService: AuthService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
