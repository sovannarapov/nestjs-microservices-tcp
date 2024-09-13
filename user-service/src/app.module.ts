import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
import { DataSource } from 'typeorm';
import { addTransactionalDataSource } from 'typeorm-transactional';
import database from './config/database';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [database],
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60,
        limit: 400,
      },
    ]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService) => configService.get('database'),
      dataSourceFactory: async (options) => {
        if (!options) {
          throw new Error('Invalid options passed');
        }

        const dataSource = new DataSource(options);

        try {
          if (!dataSource.isInitialized) {
            await dataSource.initialize();
          }

          return addTransactionalDataSource(dataSource);
        } catch {
          /* empty */
        }

        return dataSource;
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
