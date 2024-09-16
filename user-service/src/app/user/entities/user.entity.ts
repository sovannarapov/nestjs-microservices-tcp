import { Column, Entity } from 'typeorm';
import { UserRole, UserStatus } from '../user.enum';
import { AbstractSoftDeleteEntity } from '@/libs/core';

@Entity({ name: 'users' })
export class User extends AbstractSoftDeleteEntity {
  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  role!: UserRole;

  @Column()
  status!: UserStatus;

  @Column()
  verifiedAt!: Date;
}
