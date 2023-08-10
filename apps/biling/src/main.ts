import { NestFactory } from '@nestjs/core';
import { BilingModule } from './biling.module';
import { RmqService } from '@app/common';
import { BILLING_SERVICE } from 'constants/services';

async function bootstrap() {
  const app = await NestFactory.create(BilingModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(BILLING_SERVICE));
  await app.startAllMicroservices();
}
bootstrap();
