import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepositoryHashmap } from './repository/app.repository.hashmap';
import { AppRepositoryTag } from './repository/app.repository';
import { AppRepositoryRedis } from './repository/app.repository.redis';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, { provide: AppRepositoryTag, useClass: AppRepositoryRedis },],
})
export class AppModule {}
