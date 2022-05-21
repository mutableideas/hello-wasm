import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('rust')
  @Render('rust')
  rust() {
    return { title: 'Hello World of Rust!' };
  }

  @Get('go')
  @Render('go')
  go() {
    return { title: 'Hello World of Go!' };
  }

  @Get('assembly-script')
  @Render('assembly-script')
  assemblyScript() {
    return { title: 'Hello Assembly Script' };
  }
}
