import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({ validationError: { target: true, value: true } }),
  );

  await app.listen(4001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
