import { Controller, Post, Body, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller('user')
export class UserController {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientProxy,
    private readonly userService: UserService,
  ) {}

  @Post('register')
  registerUser(
    @Body()
    userData: {
      name: string;
      email: string;
      password: string;
      phone: string;
    },
  ) {
    const name = userData.name;
    const email = userData.email;
    const password = userData.password;
    const phone = userData.phone;
    return this.userClient.send(
      { role: 'user', cmd: 'register' },
      { name, email, password, phone },
    );
  }
}
