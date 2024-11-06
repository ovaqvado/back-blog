import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as argon2 from 'argon2';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existEmail = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (existEmail) throw new BadRequestException('This email already exist');
    const existNickname = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (existNickname)
      throw new BadRequestException('This nickname already exist');

    const user = await this.userRepository.save({
      email: createUserDto.email,
      name: createUserDto.name,
      nickname: createUserDto.nickname,
      password: await argon2.hash(createUserDto.password),
    });

    return { user };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
