import { toInteger } from 'lodash';

module.exports = {
  type: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: toInteger(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE || '',
  charset: process.env.DB_CHARSET || 'utf8mb4',
  supportBigNumbers: true,
  bigNumberStrings: false,
  uuidExtension: process.env.DB_UUID_EXTENSION || 'uuid-ossp',
  entityPrefix: process.env.DB_ENTITY_PREFIX || '',
  installExtensions: true,
  subscribers: [],
  migrationsRun: false,
  synchronize: false,
  logging: process.env.APP_STAGE === 'dev',
  autoLoadEntities: true,
  timezone: process.env.DB_TZ || process.env.APP_TZ || 'local',
  entities: ['dist/**/*.entity.ts'],
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
