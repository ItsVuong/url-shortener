import { Inject, Injectable } from '@nestjs/common';
import { AppRepository, AppRepositoryTag } from './repository/app.repository';
import { nanoid } from 'nanoid';

@Injectable()
export class AppService {
  constructor(
    @Inject(AppRepositoryTag) private readonly appRepository: AppRepository
  ){}

  getAll(): string {
    return this.appRepository.getAll();
  }

  async shortenUrl(url: string): Promise<string>{
    try {
      const hash = nanoid(10);
      await this.appRepository.put(hash, url); 
      return hash;
    } catch (error) {
      console.log(error);
      return error
    }
  }

  async getUrl(hash: string): Promise<string>{
    return await this.appRepository.get(hash);
  }
}
