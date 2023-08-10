import { Inject, Injectable } from '@nestjs/common';
import { CreatOrderDTO } from '../dto/create-order-dto';
import { OrderRepository } from './orders.repository';
import { ClientProxy } from '@nestjs/microservices';
import { BILLING_SERVICE } from '../../../constants/services';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OrdersService {
  constructor(
    private readonly ordersRepository: OrderRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  async getOrders() {
    return this.ordersRepository.find({});
  }

  async createOrder(request: CreatOrderDTO, authentication: string) {
    const session = await this.ordersRepository.startTransaction();
    try {
      const order = await this.ordersRepository.create(request, { session });
      this.billingClient.emit('order_created', {
        request,
        Authentication: authentication,
      }),
        await session.commitTransaction();
      return order;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
  }
}
