import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from './dtos/product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';
import { Long } from 'typeorm';


@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
        
    ) { }

    async getAll(): Promise<Product[]> {
        return await this.productRepository.find();
    }

    async createProduct(productDto: ProductDto): Promise<Product> {
        return await this.productRepository.productCreate(productDto);
    }

    async deleteProductById(productId: Long){
        return await this.productRepository.deleteProductById(productId);
    }

    async patchProduct(productId: Long, productDto: ProductDto): Promise<Product> {
        return await this.productRepository.patchProduct(productId, productDto);
    }

}
