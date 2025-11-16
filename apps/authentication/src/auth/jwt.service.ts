import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import type { StringValue } from 'ms';
import { IUser } from '@aladia/common';

@Injectable()
export class AuthJwtService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async generateToken(user: IUser): Promise<string> {
    const payload = { sub: user.id, email: user.email };
    const expiresIn = (this.configService.get<string>('jwt.expiresIn') ||
      '1d') as StringValue;
    return this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('jwt.secret') || '',
      expiresIn,
    });
  }
}
