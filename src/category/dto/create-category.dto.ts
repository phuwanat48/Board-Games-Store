import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'name must be a string' })
  @IsNotEmpty({ message: 'name is required' })
  @MinLength(3, { message: 'name must be at least 3 characters long' })
  name!: string;

  @IsInt({ message: 'boardgameId must be an integer' })
  @IsNotEmpty({ message: 'boardgameId is required' })
  boardgameId!: number;
}
