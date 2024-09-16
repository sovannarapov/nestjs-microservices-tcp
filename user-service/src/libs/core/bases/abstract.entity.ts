import { AutoMap } from '@automapper/classes';
import { PrimaryGeneratedColumn } from 'typeorm';
import { AbstractBaseEntity } from './abstract-base.entity';

export abstract class AbstractEntity extends AbstractBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @AutoMap()
  id!: string;
}
