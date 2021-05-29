import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MyDataModel } from '@monorepo/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): MyDataModel {
    return { title: this.appService.getHello() };
  }
}
