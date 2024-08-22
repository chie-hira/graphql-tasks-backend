import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "src/user/user.service";
import { JwtPayload } from "../types/jwtPayload.types";
import { User } from "src/user/entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false, // 期限切れのトークンは無効
            secretOrKey: process.env.JWT_SECRET,
        });
    }

    // 認証を行うメソッド
    async validate(payload: JwtPayload): Promise<User | null> {
        return await this.userService.getUser(payload.email);
    }
}
