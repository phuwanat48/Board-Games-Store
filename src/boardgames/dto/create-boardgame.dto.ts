import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateBoardgameDto {
  @IsString({ message: 'title must be a string' })
  @IsNotEmpty({ message: 'title is required' })
  @MinLength(3, { message: 'title must be at least 3 characters long' })
  title!: string;

  @IsInt({ message: 'minPlayers must be an integer' })
  @IsNotEmpty({ message: 'minPlayers is required' })
  minPlayers!: number;

  @IsInt({ message: 'maxPlayers must be an integer' })
  @IsNotEmpty({ message: 'maxPlayers is required' })
  maxPlayers!: number;
}
