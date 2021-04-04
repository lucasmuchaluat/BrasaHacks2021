
import { Product } from 'src/products/product.entity';
import { BaseEntity, Column, Entity, Long, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';



@Entity('catalog')
export class Catalog extends BaseEntity {
    
    @PrimaryGeneratedColumn("increment")
    catalogId: Long;

    @Column('varchar',  { length: 500, unique: false})
    name: string;
    
    @ManyToMany(() => Product, (product: Product) => product.catalogs, {eager: true})
    @JoinTable()
    products: Product[];

    @Column('varchar',  { length: 500, unique: false})
    description: string;

}