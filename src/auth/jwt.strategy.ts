import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, verifiedCallback, Strategy } from 'passport-jwt'
import { AuthService } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, "local"){
    constructor(private authService : AuthService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), 
            ignoreExpiration: false,
            secretOrKey: 'secretKey'
        });
    }

    async validate(email: string, pass: string, done: verifiedCallback){
        const user = await this.authService.validateUser(email,pass);
        if (!user) {
            console.log("Unauthorized Exception");
            
            throw new UnauthorizedException();
        }
        return done(null, user);
    }

}