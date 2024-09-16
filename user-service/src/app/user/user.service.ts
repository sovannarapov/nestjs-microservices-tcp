import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(dto: Partial<User>) {
    return await this.userRepository.save({ ...dto, createdAt: new Date() });
  }

  async findAll() {
    return await this.userRepository.find();
  }
}
