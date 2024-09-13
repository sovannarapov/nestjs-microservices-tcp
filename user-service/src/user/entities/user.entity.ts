import { Column, Entity } from 'typeorm';
import { UserStatus } from '../user.enum';
import { AbstractSoftDeleteEntity } from 'src/libs/core';

@Entity()
export class User extends AbstractSoftDeleteEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column()
  status: UserStatus;

  @Column()
  verifiedAt: Date;
}
