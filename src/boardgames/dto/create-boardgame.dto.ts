import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBoardgameDto {
  @IsString({ message: 'title must be a string' })
  @IsNotEmpty({ message: 'title is required' })
  @MinLength(3, { message: 'title must be at least 3 characters long' })
  title!: string;

  @IsInt({ message: 'minPlayers must be an integer' })
  @IsNotEmpty({ message: 'minPlayers is required' })
  @MinLength(1, { message: 'minPlayers must be at least 1' })
  minPlayers!: number;

  @IsInt({ message: 'maxPlayers must be an integer' })
  @IsNotEmpty({ message: 'maxPlayers is required' })
  @MinLength(1, { message: 'maxPlayers must be at least 1' })
  maxPlayers!: number;

  @IsInt({ message: 'categoryId must be an integer' })
  @IsNotEmpty({ message: 'categoryId is required' })
  categoryId!: number;
}
