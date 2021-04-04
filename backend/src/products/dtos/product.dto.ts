import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength, MaxLength, Matches, IsEnum } from 'class-validator';









export class ProductDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    price: number;
    
    @ApiProperty()
    @IsNotEmpty()
    comission: number;

    @ApiProperty()
    @IsNotEmpty()
    minimumComission: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    bias: string;

    @ApiProperty()
    @IsNotEmpty()
    stock: number;

}
