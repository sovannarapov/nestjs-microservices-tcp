import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/requests';
import { RESOURCE } from './user.constants';

@Controller(RESOURCE)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(
    @Body()
    dto: CreateUserDto,
  ) {
    return this.userService.create(dto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
