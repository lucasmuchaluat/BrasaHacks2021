import { Body, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dtos/product.dto';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { Long } from 'typeorm';




@ApiTags('Products')
@Controller('products')
export class ProductsController {
    constructor(
        private productService: ProductsService, 
    ) {}

    @Get('/')
    getProducts(): Promise<Product[]> {
        return this.productService.getAll();
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createProduct(@Body() productDto: ProductDto): Promise<Product> {
        return this.productService.createProduct(productDto);
    }

    @Delete('/:productId')
    @UsePipes(ValidationPipe)
    deleteProduct(@Param('productId') productId: Long) {
        return this.productService.deleteProductById(productId);
    }

    @Patch('/:productId')
    @UsePipes(ValidationPipe)
    patchProduct(@Param('productId') productId: Long, @Body() productDto: ProductDto): Promise<Product> {
        return this.productService.patchProduct(productId, productDto);
    }

}
