import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './user/entities/user.entity';

export const Config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5434,
  username: 'root',
  password: 'root',
  database: 'nestdb',
  entities: [User],
  synchronize: true,
  // migrationsTableName: 'migration_table',
  // migrations: ['dist/user/migration/*.js'],
};

const dataSource = new DataSource(Config);

export default dataSource;
