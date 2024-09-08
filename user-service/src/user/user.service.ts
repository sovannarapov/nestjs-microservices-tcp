import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(payload: {
    name: string;
    email: string;
    password: string;
    phone: number;
  }) {
    return await this.userRepository.save(payload);
  }
}
