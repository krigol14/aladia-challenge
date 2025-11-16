import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { Logger } from 'nestjs-pino';
import { UserRepository } from './user.repository';
import { RegisterUserDto, LoginUserDto, IUser } from '@aladia/common';
import { AuthJwtService } from '../auth/jwt.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authJwtService: AuthJwtService,
    private readonly logger: Logger,
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<IUser> {
    const existingUser = await this.userRepository.findByEmail(
      registerUserDto.email,
    );

    if (existingUser) {
      this.logger.warn(
        { email: registerUserDto.email },
        'Registration attempt with existing email',
      );
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(registerUserDto.password, 10);

    const user = await this.userRepository.create({
      email: registerUserDto.email,
      name: registerUserDto.name,
      password: hashedPassword,
    });

    this.logger.log(
      { userId: user.id, email: user.email },
      'User registered successfully',
    );
    return user;
  }

  async login(
    loginUserDto: LoginUserDto,
  ): Promise<{ user: IUser; accessToken: string }> {
    const user = await this.userRepository.findByEmailWithPassword(
      loginUserDto.email,
    );

    if (!user) {
      this.logger.warn(
        { email: loginUserDto.email },
        'Login attempt with non-existent email',
      );
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );

    const userDto = this.userRepository.toIUser(user);

    if (!isPasswordValid) {
      this.logger.warn(
        { email: loginUserDto.email, userId: userDto.id },
        'Login attempt with invalid password',
      );
      throw new UnauthorizedException('Invalid credentials');
    }
    const accessToken = await this.authJwtService.generateToken(userDto);

    this.logger.log(
      { userId: userDto.id, email: userDto.email },
      'User logged in successfully',
    );

    return {
      user: userDto,
      accessToken,
    };
  }

  async getAllUsers(): Promise<IUser[]> {
    const users = await this.userRepository.findAll();
    this.logger.log({ count: users.length }, 'Retrieved all users');
    return users;
  }
}
