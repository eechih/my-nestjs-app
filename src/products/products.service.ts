import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ProductCreatedEvent } from './events/product-created.event';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private eventEmitter: EventEmitter2,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = new Product();
    product.name = createProductDto.name;
    product.price = createProductDto.price;
    product.cost = createProductDto.cost;
    product.supplier = createProductDto.supplier;
    const now = new Date();
    product.createdAt = now.toISOString();
    product.updatedAt = now.toISOString();
    const createdProduct = await this.productsRepository.save(product);

    const productCreatedEvent = new ProductCreatedEvent();
    productCreatedEvent.name = createdProduct.name;
    productCreatedEvent.description = createdProduct.description ?? '';
    productCreatedEvent.price = createdProduct.price;
    productCreatedEvent.cost = createdProduct.cost;
    productCreatedEvent.supplier = createdProduct.supplier ?? '';
    this.eventEmitter.emit('product.created', productCreatedEvent);

    return createdProduct;
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
