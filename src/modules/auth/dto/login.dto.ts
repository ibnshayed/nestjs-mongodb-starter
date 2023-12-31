import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  password: string;
}
