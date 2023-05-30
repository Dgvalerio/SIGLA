import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateProductDto } from '@/product/dto/create-product.dto';
import { UpdateProductDto } from '@/product/dto/update-product.dto';
import { ProductService } from '@/product/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto): string {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll(): string {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto
  ): string {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.productService.remove(+id);
  }
}
