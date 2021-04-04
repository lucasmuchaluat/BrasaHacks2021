import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, MinLength, MaxLength, Matches, IsEnum } from 'class-validator';
import { Long } from 'typeorm';


export class CatalogDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    productIds: Array<Long>[];

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
}