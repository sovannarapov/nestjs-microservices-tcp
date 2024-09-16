import { AutoMap } from '@automapper/classes';
import { BeforeUpdate, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class AbstractBaseEntity {
  @CreateDateColumn()
  @AutoMap()
  createdAt!: Date;

  @UpdateDateColumn()
  @AutoMap()
  updatedAt!: Date;

  @BeforeUpdate()
  beforeUpdate(): void {
    this.updatedAt = new Date();
  }
}
