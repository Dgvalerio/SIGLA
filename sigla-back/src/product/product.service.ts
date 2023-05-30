import { Injectable } from '@nestjs/common';

import { CreateProductDto } from '@/product/dto/create-product.dto';
import { UpdateProductDto } from '@/product/dto/update-product.dto';

@Injectable()
export class ProductService {
  create(createProductDto: CreateProductDto): string {
    return 'This action adds a new product';
  }

  findAll(): string {
    return `This action returns all product`;
  }

  findOne(id: number): string {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto): string {
    return `This action updates a #${id} product`;
  }

  remove(id: number): string {
    return `This action removes a #${id} product`;
  }
}
