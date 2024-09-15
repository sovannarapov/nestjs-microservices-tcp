import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/requests';
import { ClientProxy } from '@nestjs/microservices';
import { USER_CLIENT } from './constants';

@Injectable()
export class UserService {
  constructor(@Inject(USER_CLIENT) private readonly userClient: ClientProxy) {}

  create(dto: CreateUserDto) {
    return this.userClient.send('users.create', { ...dto });
  }

  findAll() {
    return this.userClient.send('users.findAll', {});
  }
}
