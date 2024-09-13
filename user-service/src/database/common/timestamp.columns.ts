import { DataType } from './constant';

export default [
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
