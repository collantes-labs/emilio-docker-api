import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Product} from './product.entity';
import { DeepPartial } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product) 
    private productsRepository: Repository<Product>
  ) {}

  async getAllProducts() {
    return this.productsRepository.find();
  }

  async getProductById(id: number) {
    return this.productsRepository.findOne({
      where: {id} 
    });
  }

  async updateProduct(id: number, product: Product) {
    const updatedProduct = await this.productsRepository.preload({
      id,
      ...this.toPartial(product) 
    }) as DeepPartial<Product>;
    return this.productsRepository.save(updatedProduct);
  }

  toPartial(product: Product): DeepPartial<Product> {
    return product as DeepPartial<Product>;
  }

  async createProduct(product: Product) {
    return this.productsRepository.save(product);
  }

  async deleteProduct(id: number) {
    await this.productsRepository.delete({id});
  }

}