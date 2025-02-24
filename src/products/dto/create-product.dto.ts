import { IsInt, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly price: number;

  @IsInt()
  readonly cost: number;

  @IsString()
  readonly supplier?: string;
}
