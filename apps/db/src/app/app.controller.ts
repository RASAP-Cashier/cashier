import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import * as packageJson from '../../package.json';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/version')
  getVersion() {
    return packageJson.version;
  }
}
