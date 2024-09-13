import { DataType } from './constant';

const TimestampColumns = [
  {
    name: 'created_at',
    type: DataType.DateTime,
    isNullable: true,
    isCreateDate: true,
  },
  {
    name: 'updated_at',
    type: DataType.DateTime,
    isUpdateDate: true,
    default: 'CURRENT_TIMESTAMP',
  },
];

const TimestampSoftDeleteColumns = [
  ...TimestampColumns,
  {
    name: 'deleted_at',
    type: DataType.DateTime,
    isNullable: true,
  },
];

export { TimestampColumns, TimestampSoftDeleteColumns };
