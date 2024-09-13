import { TableColumnOptions } from 'typeorm';

import { TimestampSoftDeleteMigration } from '../common';
import { DataType } from '../common/constant';
// import { UserRole, UserStatus } from '../../user/user.enum';

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
    // {
    //   name: 'phoneNumber',
    //   type: 'bigint',
    // },
    // {
    //   name: 'role',
    //   type: 'enum',
    //   enum: Object.values(UserRole),
    //   default: `'${UserRole.USER}'`,
    // },
    {
      name: 'role',
      type: 'varchar',
    },
    // {
    //   name: 'status',
    //   type: 'char',
    //   length: '1',
    //   default: UserStatus.VALID,
    // },
    // {
    //   name: 'forceChangePassword',
    //   type: 'smallint',
    //   length: '1',
    //   unsigned: true,
    //   default: 0,
    // },
    {
      name: 'verifiedAt',
      type: DataType.DateTime,
      isNullable: true,
    },
    // {
    //   name: 'lastLoginDate',
    //   type: 'datetime',
    //   isNullable: true,
    // },
  ];
}
