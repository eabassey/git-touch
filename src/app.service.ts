import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello 123!';
  }
}

@Injectable()
export class App2Service {
  root(): string {
    return 'Hello gggg!';
  }
}
