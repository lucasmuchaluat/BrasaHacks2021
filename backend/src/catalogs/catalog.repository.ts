import { InternalServerErrorException } from "@nestjs/common";
import { ProductDto } from "src/products/dtos/product.dto";
import { Product } from "src/products/product.entity";
import { EntityRepository, Long, Repository } from "typeorm";
import { Catalog } from "./catalog.entity";
import { CatalogDto } from "./dtos/catalog.dto";




@EntityRepository(Catalog)
export class CatalogRepository extends Repository<Catalog> {

    async createCatalog(catalogDto: CatalogDto, products: Product[]): Promise<Catalog>{
        try{
            const newCatalog = await this.catalogMapper(catalogDto);
            newCatalog.products = products;
            await newCatalog.save();

            return newCatalog;

        }catch (error) {
            console.log(error.code)
            throw new InternalServerErrorException(error);
        }
    }

    async deleteCatalogById(catalogId: string){
        try{
            const catalog = await this.findOneOrFail({catalogId});
            await this.remove(catalog);

        }catch (error) {
            console.log(error.code)
            throw new InternalServerErrorException(error);
            
        }
    }

    async patchCatalog(catalogId, catalogDto, products: Product[]){
        try{
            const catalog = await this.findOneOrFail({catalogId});
            const newCatalog = await this.catalogUpdate(catalog, catalogDto);
            newCatalog.products = products;
            await newCatalog.save();

            return newCatalog;

        }catch (error) {
            console.log(error.code)
            throw new InternalServerErrorException(error);
            
        }
    }

    catalogMapper(catalogDto: CatalogDto): Catalog{
        var catalog = new Catalog();
        catalog.name = catalogDto.name;
        catalog.description = catalogDto.description;
        return catalog;
    }

    catalogUpdate(catalog: Catalog, catalogDto: CatalogDto): Catalog{
        catalog.name = catalogDto.name;
        catalog.description = catalogDto.description;
        return catalog;
    }

}