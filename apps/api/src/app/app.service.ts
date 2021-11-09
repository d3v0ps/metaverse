import { Injectable } from '@nestjs/common';

export class Message {
  message: string;
}

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
