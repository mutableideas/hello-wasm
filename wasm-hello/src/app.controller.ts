import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('rust')
  @Render('rust')
  rust() {
    return { title: 'Hello World of Rust!' };
  }
}
