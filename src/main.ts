import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Amplify } from 'aws-amplify';
import * as compression from 'compression';
import config from '../aws-exports.js';
import { AppModule } from './app.module';

Amplify.configure(config);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(compression());

  await app.listen(process.env.PORT ?? 3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
