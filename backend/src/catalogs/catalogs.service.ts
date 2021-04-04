import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from 'src/products/product.repository';
import { Catalog } from './catalog.entity';
import { CatalogRepository } from './catalog.repository';
import { CatalogDto } from './dtos/catalog.dto';
import { Long } from 'typeorm';


@Injectable()
export class CatalogsService {
    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
        @InjectRepository(CatalogRepository)
        private catalogRepository: CatalogRepository,
    ) { }

    async getAll(): Promise<Catalog[]> {
        return await this.catalogRepository.find();
    }

    async createCatalog(catalogDto: CatalogDto): Promise<Catalog> {
        var products = await this.productRepository.findByIds(catalogDto.productIds);
        return await this.catalogRepository.createCatalog(catalogDto, products);
    }

    async deleteCatalogById(catalogId: Long){
        return await this.catalogRepository.deleteCatalogById(catalogId);
    }

    async patchCatalog(catalogId: Long, catalogDto: CatalogDto): Promise<Catalog> {
        var products = await this.productRepository.findByIds(catalogDto.productIds);
        return await this.catalogRepository.patchCatalog(catalogId, catalogDto, products);
    }

}
