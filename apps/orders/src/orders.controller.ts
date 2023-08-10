import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreatOrderDTO } from '../dto/create-order-dto';
import { JwtAuthGuard } from '@app/common/auth/jwt-auth.guard';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  async createOrder(@Body() request: CreatOrderDTO, @Req() req: any) {
    return this.ordersService.createOrder(request, req.cookies?.Authentication);
  }
}
