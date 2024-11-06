import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3001;
  app.setGlobalPrefix('api');
  await app.listen(PORT);
  app.useGlobalPipes(new ValidationPipe());
  console.log(`App run and listen ${PORT}`);
}
bootstrap();
