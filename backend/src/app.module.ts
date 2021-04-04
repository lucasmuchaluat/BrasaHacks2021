import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { CatalogsModule } from './catalogs/catalogs.module';

@Module({
  imports: [ProductsModule, TypeOrmModule.forRoot(typeOrmConfig), CatalogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
