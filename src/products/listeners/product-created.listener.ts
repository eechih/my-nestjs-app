import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { ProductCreatedEvent } from '../events/product-created.event';

@Injectable()
export class ProductCreatedListener {
  @OnEvent('product.created')
  handleProductCreatedEvent(event: ProductCreatedEvent) {
    // handle and process "ProductCreatedEvent" event
    console.log('Handle and process ProductCreatedEvent event:', event);
  }
}
