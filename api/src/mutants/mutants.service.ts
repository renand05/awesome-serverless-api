import { Injectable } from '@nestjs/common';
import { MutantsDto } from './mutants.dto';

@Injectable()
export class MutantsService {
  get(): string {
    return 'Hello World!';
  }

  create(mutant: MutantsDto): MutantsDto {
    // TODO check if dna is mutant
    return mutant;
  }
}
