import { Product } from "./product.entity";
import { EntityRepository, Long, Repository } from "typeorm";
import { ProductDto } from "./dtos/product.dto";
import { InternalServerErrorException } from "@nestjs/common";




@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

    async productCreate(productDto: ProductDto): Promise<Product>{
        try{
            const newProduct = await this.productMapper(productDto);
            await newProduct.save();

            return newProduct;

        }catch (error) {
            console.log(error.code)
            throw new InternalServerErrorException(error);
        }
    }

    async deleteProductById(productId: Long){
        try{
            const product = await this.findOneOrFail({productId});
            await this.delete(product);

        }catch (error) {
            console.log(error.code)
            throw new InternalServerErrorException(error);
            
        }
    }

    async patchProduct(productId, productDto){
        try{
            const product = await this.findOneOrFail({productId});
            const newProduct = await this.productUpdate(product, productDto);
            await newProduct.save();

            return newProduct;

        }catch (error) {
            console.log(error.code)
            throw new InternalServerErrorException(error);
            
        }
    }

    productMapper(productDto: ProductDto): Product{
        var product = new Product();
        product.name = productDto.name;
        product.bias = productDto.bias;
        product.comission = productDto.comission;
        product.price = productDto.price;
        product.stock = productDto.stock;
        product.minimumComission = productDto.minimumComission;
        product.image = productDto.image;
        return product;
    }

    productUpdate(product: Product,productDto: ProductDto): Product{
        product.name = productDto.name;
        product.bias = productDto.bias;
        product.comission = productDto.comission;
        product.price = productDto.price;
        product.stock = productDto.stock;
        product.minimumComission = productDto.minimumComission;
        product.image = productDto.image;
        return product;
    }

}