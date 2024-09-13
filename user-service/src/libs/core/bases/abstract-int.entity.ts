import { AutoMap } from '@automapper/classes';
import {
  BeforeInsert,
  BeforeUpdate,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class AbstractIntEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  @AutoMap()
  id: number;

  @CreateDateColumn()
  @AutoMap()
  createdAt: Date;

  @UpdateDateColumn()
  @AutoMap()
  updatedAt: Date;

  @BeforeInsert()
  beforeInsert(): void {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  @BeforeUpdate()
  beforeUpdate(): void {
    this.updatedAt = new Date();
  }
}
