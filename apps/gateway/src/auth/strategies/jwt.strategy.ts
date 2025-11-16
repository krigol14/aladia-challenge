import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';

interface JwtPayload {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly logger: Logger,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret'),
    });
  }

  validate(payload: JwtPayload) {
    if (!payload.sub || !payload.email) {
      this.logger.warn({ payload }, 'Invalid JWT token payload');
      throw new UnauthorizedException('Invalid token payload');
    }
    this.logger.debug(
      { userId: payload.sub, email: payload.email },
      'JWT token validated successfully',
    );
    return { userId: payload.sub, email: payload.email };
  }
}
