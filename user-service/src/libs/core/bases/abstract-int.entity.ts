import { AutoMap } from '@automapper/classes';
import { PrimaryGeneratedColumn } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';

export abstract class AbstractIntEntity extends AbstractBaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  @AutoMap()
  id!: number;
}
