import { AppRepository } from './app.repository';

export class AppRepositoryHashmap implements AppRepository {
  private readonly hashMap: Map<string, string>;

  constructor() {
    this.hashMap = new Map<string, string>();
  }

  get(hash: string): Promise<string> {
    console.log('creating promise')
    return new Promise((resolve) => {
      resolve(this.hashMap.get(hash))
    })
    
  }

  put(hash: string, url: string): Promise<string> {
    return new Promise((resolve) => {
      resolve(this.hashMap.set(hash, url).get(hash));
    })
  }
}