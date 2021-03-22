import { Injectable } from '@nestjs/common';

@Injectable()
export class MutantsService {
  getHello(): string {
    return 'Hello World!';
  }

  create(): string {
    return 'hello from POST';
  }
}
