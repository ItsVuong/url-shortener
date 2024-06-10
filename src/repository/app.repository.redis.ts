import { AppRepository } from './app.repository';
import { createClient, RedisClientType } from 'redis';
 
export class AppRepositoryRedis implements AppRepository {
  private readonly redisClient: RedisClientType;
 
  constructor() {
    const host = process.env.REDIS_HOST || 'localhost';
    const port = +process.env.REDIS_PORT || 6379;
    this.redisClient = createClient({
      url: `redis://${host}:${port}`,
    });
    this.redisClient.on('error', err => console.log('Redis Client Error', err));
    this.redisClient.on('connect', () => console.log('Redis connected'));
    this.redisClient.connect();
  }
 
  async get(hash: string): Promise<string>{
    return await this.redisClient.get(hash);
  }
 
  async put(hash: string, url: string): Promise<string> {
    return await this.redisClient.set(hash, url)
    
  }
}