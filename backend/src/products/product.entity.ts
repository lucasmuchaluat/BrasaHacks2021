
import { Catalog } from 'src/catalogs/catalog.entity';
import { BaseEntity, Column, Entity, Long, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany, OneToOne, JoinColumn, ManyToOne } from 'typeorm';



@Entity('product')
export class Product extends BaseEntity {
    
    @PrimaryGeneratedColumn("increment")
    productId: Long;

    @Column('varchar',  { length: 500, unique: false})
    name: string;

    @Column('decimal')
    price: number;
    
    @Column('decimal')
    comission: number;

    @Column('decimal')
    minimumComission: number;

    @Column('varchar',  { length: 500, unique: false})
    bias: string;

    @Column('decimal')
    stock: number;

    @Column('varchar',  { length: 500, unique: false})
    image: string;

    @ManyToMany(() => Catalog, (catalog: Catalog) => catalog.products)
    catalogs: Catalog[];

}