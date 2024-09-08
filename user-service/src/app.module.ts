import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { Config } from './data-source';

@Module({
  imports: [TypeOrmModule.forRoot(Config), UserModule],
})
export class AppModule {}
