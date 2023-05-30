import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { CreateUserDto } from '@/user/dto/create-user.dto';
import { UpdateUserDto } from '@/user/dto/update-user.dto';
import { UserService } from '@/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto): string {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): string {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto
  ): string {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): string {
    return this.userService.remove(+id);
  }
}
