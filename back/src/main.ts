import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  Logger.log('Server start http://localhost:4000/graphql', 'Bootstap');
}
bootstrap();
