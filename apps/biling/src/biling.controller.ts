import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { BilingService } from './biling.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard, RmqService } from '@app/common';

@Controller()
export class BilingController {
  constructor(
    private readonly bilingService: BilingService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.bilingService.getHello();
  }

  @EventPattern('order_created')
  @UseGuards(JwtAuthGuard)
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.bilingService.handleOrderCreated(data);
    this.rmqService.ack(context);
  }
}
