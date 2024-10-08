import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dtos/requests';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('users.create')
  async create(@Payload() dto: CreateUserDto) {
    delete dto.passwordConfirm;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(dto.password, salt);

    return this.userService.create({
      ...dto,
      password: hashedPassword,
    });
  }

  @MessagePattern('users.findAll')
  async findAll() {
    return this.userService.findAll();
  }
}
