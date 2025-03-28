import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(@Body() createUserDto: CreateUserDto) {
    await this.prisma.users.create({
      data: createUserDto,
    });
  }
}
