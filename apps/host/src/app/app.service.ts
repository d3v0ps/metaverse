import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getIndex(): { message: string } {
    return { message: 'Welcome to host!' };
  }
}
