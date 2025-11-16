import {
  Controller,
  Post,
  Get,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { NetworkingService } from '../networking/networking.service';
import {
  RegisterUserDto,
  LoginUserDto,
  UserResponseDto,
  LoginResponseDto,
} from '@aladia/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly networkingService: NetworkingService,
    private readonly logger: Logger,
  ) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Register a new user' })
  @ApiBody({ type: RegisterUserDto })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request - validation failed' })
  @ApiResponse({ status: 409, description: 'Conflict - user already exists' })
  async register(
    @Body() registerUserDto: RegisterUserDto,
  ): Promise<UserResponseDto> {
    this.logger.log(
      { email: registerUserDto.email },
      'Registration request received',
    );
    const user = await this.networkingService.registerUser(registerUserDto);
    this.logger.log(
      { userId: user.id, email: user.email },
      'User registered successfully',
    );
    return user;
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: LoginUserDto })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged in',
    type: LoginResponseDto,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - invalid credentials',
  })
  async login(@Body() loginUserDto: LoginUserDto): Promise<LoginResponseDto> {
    this.logger.log({ email: loginUserDto.email }, 'Login request received');
    const result = await this.networkingService.login(loginUserDto);
    this.logger.log(
      { userId: result.user.id, email: result.user.email },
      'User logged in successfully',
    );
    return result;
  }

  @Get('users')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Get all users (requires authentication)' })
  @ApiResponse({
    status: 200,
    description: 'List of all users',
    type: [UserResponseDto],
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - token required' })
  async getAllUsers(): Promise<UserResponseDto[]> {
    this.logger.log('Get all users request received');
    const users = await this.networkingService.getAllUsers();
    this.logger.log({ count: users.length }, 'Retrieved all users');
    return users;
  }
}
