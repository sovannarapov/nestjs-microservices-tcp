import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ role: 'user', cmd: 'register' })
  async register_user(@Payload() payload: User): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(payload.password, salt);
    const payloadBody = {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,
      phone: payload.phone,
    };

    return await this.userService.create(payloadBody);
  }
}
