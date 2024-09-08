import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterDto } from './dtos/requests';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  registerUser(
    @Body()
    dto: RegisterDto,
  ) {
    return this.userService.create(dto);
  }
}
