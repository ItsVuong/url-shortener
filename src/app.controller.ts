import { Body, Controller, Get, Param, Post, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async shortenUrl(@Body() url:string){
    console.log('hello bro')
    if(!url){
      return {error: 'No url provided'}
    }
    return await this.appService.shortenUrl(url);
  }

  @Get(':hash')
  @Redirect()
  getUrl(@Param('hash') hash){
    return this.appService.getUrl(hash);
  }
}
