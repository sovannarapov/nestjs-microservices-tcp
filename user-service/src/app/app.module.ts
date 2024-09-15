// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ThrottlerModule } from '@nestjs/throttler';
// import { DataSource } from 'typeorm';
// import { addTransactionalDataSource } from 'typeorm-transactional';

// import configs from '@/config';

// import { UserModule } from './user/user.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       // isGlobal: true,
//       // envFilePath: ['.env'],
//       cache: true,
//       load: configs,
//       isGlobal: true,
//       validationOptions: {
//         allowUnknown: false,
//         abortEarly: true,
//       },
//       expandVariables: false,
//     }),
//     ThrottlerModule.forRoot([
//       {
//         ttl: 60,
//         limit: 400,
//       },
//     ]),
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService) => configService.get('database'),
//       dataSourceFactory: async (options) => {
//         if (!options) {
//           throw new Error('Invalid options passed');
//         }

//         const dataSource = new DataSource(options);

//         try {
//           if (!dataSource.isInitialized) {
//             await dataSource.initialize();
//           }

//           return addTransactionalDataSource(dataSource);
//         } catch {
//           /* empty */
//         }

//         return dataSource;
//       },
//     }),
//     UserModule,
//   ],
// })
// export class AppModule {}

import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';

import { ApiKeyMiddleware, LoggerMiddleware } from '@/libs/core';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    if (process.env.API_KEY_ENABLED === 'true') {
      consumer.apply(ApiKeyMiddleware).exclude('/').forRoutes('*');
    }

    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
