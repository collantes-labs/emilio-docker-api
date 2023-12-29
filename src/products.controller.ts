import { Body, Controller, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Get } from '@nestjs/common';
import { Patch } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Delete } from '@nestjs/common';

@Controller('products')
export class ProductsController {

  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Get(':id') 
  getProduct(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }

  @Patch(':id')
  updateProduct(@Param('id') id, @Body() product) {
    return this.productsService.updateProduct(id, product); 
  }

  @Post()
  create(@Body() product) {
    return this.productsService.createProduct(product);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.productsService.deleteProduct(id);
  }

}