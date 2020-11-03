import { AuthGuard } from "@nestjs/passport";
import { JwtStrategy } from "./jwt.strategy";

export class JwtAuthGuard extends JwtStrategy{}