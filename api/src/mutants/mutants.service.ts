import { Injectable } from '@nestjs/common';

@Injectable()
export class MutantsService {
  get(): string {
    return 'Hello World!';
  }

  create(): string {
    return 'hello from POST';
  }
}
