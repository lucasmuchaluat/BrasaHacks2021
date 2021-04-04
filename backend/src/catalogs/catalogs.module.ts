import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductRepository } from 'src/products/product.repository';
import { CatalogRepository } from './catalog.repository';
import { CatalogsController } from './catalogs.controller';
import { CatalogsService } from './catalogs.service';

@Module({
  imports: [TypeOrmModule.forFeature([CatalogRepository, ProductRepository])],
  controllers: [CatalogsController],
  providers: [CatalogsService]
})
export class CatalogsModule {}
