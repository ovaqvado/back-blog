import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email?: string;

  @MinLength(10, { message: 'Password must be mo then 6 symbols' })
  password?: string;

  @IsString()
  name?: string;

  @IsString()
  nickname?: string;
}
