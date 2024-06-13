import { AuthCreadentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { User } from './user.entity';
import { AuthSigninDto } from './dto/auth-signin.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(authCredentialsDto: AuthCreadentialsDto): Promise<User>;
    signIn(authSigninDto: AuthSigninDto): Promise<{
        accessToken: string;
        role: string;
    }>;
    test(req: any): void;
}
