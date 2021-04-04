import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Catalog } from './catalog.entity';
import { Long } from 'typeorm';
import { CatalogsService } from './catalogs.service';
import { CatalogDto } from './dtos/catalog.dto';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Catalog')
@Controller('catalogs')
export class CatalogsController {
    constructor(
        private catalogsService: CatalogsService, 
    ) {}

    @Get('/')
    getProducts(): Promise<Catalog[]> {
        return this.catalogsService.getAll();
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createProduct(@Body() catalogDto: CatalogDto): Promise<Catalog> {
        return this.catalogsService.createCatalog(catalogDto);
    }

    @Delete('/:catalogId')
    @UsePipes(ValidationPipe)
    deleteProduct(@Param('catalogId') catalogId: Long) {
        return this.catalogsService.deleteCatalogById(catalogId);
    }

    @Patch('/:catalogId')
    @UsePipes(ValidationPipe)
    patchProduct(@Param('catalogId') catalogId: Long, @Body() catalogDto: CatalogDto): Promise<Catalog> {
        return this.catalogsService.patchCatalog(catalogId, catalogDto);
    }

}
