import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  MESSAGE_PATTERNS,
  RegisterUserDto,
  LoginUserDto,
  IUser,
  LoginResponseDto,
} from '@aladia/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern(MESSAGE_PATTERNS.USER.REGISTER)
  async register(@Payload() registerUserDto: RegisterUserDto): Promise<IUser> {
    return await this.userService.register(registerUserDto);
  }

  @MessagePattern(MESSAGE_PATTERNS.USER.LOGIN)
  async login(
    @Payload() loginUserDto: LoginUserDto,
  ): Promise<LoginResponseDto> {
    return await this.userService.login(loginUserDto);
  }

  @MessagePattern(MESSAGE_PATTERNS.USER.GET_ALL)
  async getAllUsers(): Promise<IUser[]> {
    return await this.userService.getAllUsers();
  }
}
