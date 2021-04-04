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
    getCatalogs(): Promise<Catalog[]> {
        return this.catalogsService.getAll();
    }

    @Get('/:catalogId')
    getCatalog(@Param('catalogId') catalogId: string): Promise<Catalog> {
        return this.catalogsService.getCatalogById(catalogId);
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createCatalog(@Body() catalogDto: CatalogDto): Promise<Catalog> {
        return this.catalogsService.createCatalog(catalogDto);
    }

    @Delete('/:catalogId')
    @UsePipes(ValidationPipe)
    deleteCatalog(@Param('catalogId') catalogId: string) {
        return this.catalogsService.deleteCatalogById(catalogId);
    }

    @Patch('/:catalogId')
    @UsePipes(ValidationPipe)
    patchCatalog(@Param('catalogId') catalogId: string, @Body() catalogDto: CatalogDto): Promise<Catalog> {
        return this.catalogsService.patchCatalog(catalogId, catalogDto);
    }

}
