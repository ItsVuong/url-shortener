import { Inject, Injectable } from '@nestjs/common';
import { AppRepository, AppRepositoryTag } from './repository/app.repository';
import { nanoid } from 'nanoid';

@Injectable()
export class AppService {
  constructor(
    @Inject(AppRepositoryTag) private readonly appRepository: AppRepository
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async shortenUrl(url: string): Promise<string>{
    try {
      const hash = nanoid(10);
      await this.appRepository.put(hash, url); 
      return hash;
    } catch (error) {
      return error;
    }
  }

  async getUrl(hash: string): Promise<string>{
    return await this.appRepository.get(hash);
  }
}
