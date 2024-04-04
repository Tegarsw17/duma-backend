import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return { message: 'Hello, This is API for DUMA' };
  }
  getHelloS(): { message: string } {
    return { message: 'You want add something in DUMA' };
  }
}
