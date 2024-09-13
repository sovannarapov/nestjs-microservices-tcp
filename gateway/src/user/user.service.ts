import { Inject, Injectable } from '@nestjs/common';
import { RegisterDto } from './dtos/requests';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientProxy,
  ) {}

  create(dto: RegisterDto) {
    return this.userClient.send({ role: 'user', cmd: 'register' }, { ...dto });
  }
}
