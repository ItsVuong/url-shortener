import { Body, Controller, Get, Headers, Param, Post, Redirect, Request } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Request() req: any): string {
    // console.log(req)
    return this.appService.getAll();
  }

  @Post()
  async shortenUrl(@Body() body, @Headers() headers){
    const {url} = body
    if(!url){
      return {error: 'No url provided'}
    }
    const host = headers.host;
    return host + "/" + await this.appService.shortenUrl(url);
  }

  @Get(':hash')
  @Redirect('')
  async getUrl(@Param('hash') hash: string){
    const url = await this.appService.getUrl(hash);
    console.log(url)
    return {"url": url};
  }
}
