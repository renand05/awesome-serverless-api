import { createHash } from 'crypto';
import { Injectable } from '@nestjs/common';
import { MutantsDto } from './mutants.dto';

const _HASH = createHash('sha256');


@Injectable()
export class MutantsService {
  get(): string {
    return 'Hello World!';
  }

  create(mutant: MutantsDto): MutantsDto {
    const { dna } = mutant;

    mutant.id = dna.join('').toLowerCase();
    mutant.isMutant = true;
    return mutant;
  }
}
