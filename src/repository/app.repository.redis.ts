import { AppRepository } from './app.repository';
import { Observable, from, mergeMap } from 'rxjs';
import { createClient, RedisClientType } from 'redis';
 
export class AppRepositoryRedis implements AppRepository {
  private readonly redisClient: RedisClientType;
 
  constructor() {
    const host = process.env.REDIS_HOST || 'redis';
    const port = +process.env.REDIS_PORT || 6379;
    this.redisClient = createClient({
      url: `redis://${host}:${port}`,
    });
    from(this.redisClient.connect()).subscribe({ error: console.error });
    this.redisClient.on('connect', () => console.log('Redis connected'));
    this.redisClient.on('error', console.error);
  }
 
  async get(hash: string): Promise<string>{
    return await this.redisClient.get(hash);
  }
 
  async put(hash: string, url: string): Promise<string> {
    return this.redisClient.set(hash, url)
    .then(() => this.redisClient.get(hash))
  }
}