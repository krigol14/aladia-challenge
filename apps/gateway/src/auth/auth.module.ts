import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import type { StringValue } from 'ms';
import { AuthController } from './auth.controller';
import { NetworkingModule } from '../networking/networking.module';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    NetworkingModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const expiresIn = (configService.get<string>('jwt.expiresIn') ||
          '1d') as StringValue;
        return {
          secret: configService.get<string>('jwt.secret') || '',
          signOptions: { expiresIn },
        };
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthController],
  providers: [JwtStrategy],
})
export class AuthModule { }
