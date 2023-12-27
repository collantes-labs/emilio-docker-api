import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {

  productsRepository: Repository<Product>;

  constructor() {
    this.productsRepository = getRepository(Product);
  }

  async getAllProducts() {
    return await this.productsRepository.find();
  }

}