import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes the configuration module globally available
      envFilePath: '.env', // Optionally specify a path to the .env file
    }),
    UserModule,
  ],
})
export class AppModule {}
