import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepositoryHashmap } from './repository/app.repository.hashmap';
import { AppRepositoryTag } from './repository/app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, { provide: AppRepositoryTag, useClass: AppRepositoryHashmap },],
})
export class AppModule {}
