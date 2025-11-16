import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.AUTHENTICATION_SERVICE_HOST || 'localhost',
        port: parseInt(process.env.AUTHENTICATION_SERVICE_PORT || '3001', 10),
      },
      bufferLogs: true,
    },
  );

  app.useLogger(app.get(Logger));
  app.flushLogs();

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const configService = app.get(ConfigService);
  const logger = app.get(Logger);
  const host = configService.get<string>('microservices.authentication.host');
  const port = configService.get<number>('microservices.authentication.port');

  await app.listen();
  logger.log(`Authentication microservice is listening on ${host}:${port}`);
}
bootstrap();
