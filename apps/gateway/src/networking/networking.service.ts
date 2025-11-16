import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  MESSAGE_PATTERNS,
  RegisterUserDto,
  LoginUserDto,
  IUser,
  LoginResponseDto,
} from '@aladia/common';

@Injectable()
export class NetworkingService implements OnModuleInit, OnModuleDestroy {
  private client: ClientProxy;
  private isConnected = false;
  private reconnectAttempts = 0;
  private readonly maxReconnectAttempts = 10;
  private reconnectInterval: NodeJS.Timeout | null = null;

  constructor(
    private readonly configService: ConfigService,
    private readonly logger: Logger,
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host:
          this.configService.get<string>('microservices.authentication.host') ||
          'localhost',
        port:
          this.configService.get<number>('microservices.authentication.port') ||
          3001,
      },
    });
  }

  async onModuleInit() {
    await this.connectWithRetry();
  }

  private async connectWithRetry() {
    try {
      await this.client.connect();
      this.isConnected = true;
      this.reconnectAttempts = 0;
      this.logger.log('Successfully connected to authentication microservice');
    } catch {
      this.isConnected = false;
      this.reconnectAttempts++;

      if (this.reconnectAttempts <= this.maxReconnectAttempts) {
        const delay = Math.min(
          1000 * Math.pow(2, this.reconnectAttempts - 1),
          10000,
        ); // Exponential backoff, max 10s
        this.logger.warn(
          `Failed to connect to authentication microservice (attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts}). Retrying in ${delay}ms...`,
        );

        this.reconnectInterval = setTimeout(() => {
          this.connectWithRetry();
        }, delay);
      } else {
        this.logger.error(
          `Failed to connect to authentication microservice after ${this.maxReconnectAttempts} attempts. The service will continue to retry in the background.`,
        );
        // Continue retrying in the background every 10 seconds
        this.reconnectInterval = setInterval(() => {
          this.connectWithRetry();
        }, 10000);
      }
    }
  }

  private async ensureConnected() {
    if (!this.isConnected) {
      await this.client.connect();
      this.isConnected = true;
      this.reconnectAttempts = 0;
      if (this.reconnectInterval) {
        clearInterval(this.reconnectInterval);
        this.reconnectInterval = null;
      }
    }
  }

  async onModuleDestroy() {
    if (this.reconnectInterval) {
      clearInterval(this.reconnectInterval);
    }
    await this.client.close();
  }

  async registerUser(registerUserDto: RegisterUserDto): Promise<IUser> {
    await this.ensureConnected();

    if (!this.isConnected) {
      throw new Error(
        'Authentication microservice is not available. Please ensure the service is running.',
      );
    }

    try {
      return await firstValueFrom(
        this.client.send<IUser>(
          MESSAGE_PATTERNS.USER.REGISTER,
          registerUserDto,
        ),
      );
    } catch (error) {
      this.isConnected = false;
      this.logger.error(
        {
          error: error instanceof Error ? error.message : String(error),
          messagePattern: MESSAGE_PATTERNS.USER.REGISTER,
        },
        'Failed to register user via authentication microservice',
      );
      this.connectWithRetry();
      throw error;
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginResponseDto> {
    await this.ensureConnected();

    if (!this.isConnected) {
      throw new Error(
        'Authentication microservice is not available. Please ensure the service is running.',
      );
    }

    try {
      return await firstValueFrom(
        this.client.send<LoginResponseDto>(
          MESSAGE_PATTERNS.USER.LOGIN,
          loginUserDto,
        ),
      );
    } catch (error) {
      this.isConnected = false;
      this.logger.error(
        {
          error: error instanceof Error ? error.message : String(error),
          messagePattern: MESSAGE_PATTERNS.USER.LOGIN,
        },
        'Failed to login user via authentication microservice',
      );
      this.connectWithRetry();
      throw error;
    }
  }

  async getAllUsers(): Promise<IUser[]> {
    await this.ensureConnected();

    if (!this.isConnected) {
      throw new Error(
        'Authentication microservice is not available. Please ensure the service is running.',
      );
    }

    try {
      return await firstValueFrom(
        this.client.send<IUser[]>(MESSAGE_PATTERNS.USER.GET_ALL, {}),
      );
    } catch (error) {
      this.isConnected = false;
      this.logger.error(
        {
          error: error instanceof Error ? error.message : String(error),
          messagePattern: MESSAGE_PATTERNS.USER.GET_ALL,
        },
        'Failed to get all users via authentication microservice',
      );
      this.connectWithRetry();
      throw error;
    }
  }
}
