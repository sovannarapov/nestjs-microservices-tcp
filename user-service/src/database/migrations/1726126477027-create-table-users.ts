import { TableColumnOptions } from 'typeorm';

import { TimestampSoftDeleteMigration } from '../common';
import { DataType } from '../common/constant';
import { UserRole, UserStatus } from '@/app/user/user.enum';

export class CreateTableUsers1726126477027 extends TimestampSoftDeleteMigration {
  public tableName = 'users';

  public columns: TableColumnOptions[] = [
    {
      name: 'id',
      type: 'uuid',
      isPrimary: true,
      isUnique: true,
      isGenerated: true,
      unsigned: true,
      generationStrategy: 'uuid',
    },
    {
      name: 'name',
      type: 'varchar',
    },
    {
      name: 'email',
      type: 'varchar',
    },
    {
      name: 'password',
      type: 'varchar',
    },
    {
      name: 'role',
      type: 'enum',
      enum: Object.values(UserRole),
      default: `'${UserRole.USER}'`,
    },
    {
      name: 'status',
      type: 'char',
      length: '1',
      default: UserStatus.VALID,
    },
    {
      name: 'verifiedAt',
      type: DataType.DateTime,
      isNullable: true,
    },
  ];
}
