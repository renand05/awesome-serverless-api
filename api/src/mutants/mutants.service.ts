import { Injectable } from '@nestjs/common';
import { MutantsDto } from './mutants.dto';
import { MutantsDnaVerification } from './mutants.verification'


@Injectable()
export class MutantsService {
  constructor(private mutantsDnaVerification: MutantsDnaVerification) { }
  get(): string {
    return 'Hello World!';
  }

  create(mutant: MutantsDto): MutantsDto {
    const { dna } = mutant;

    mutant.id = dna.join('').toLowerCase();
    mutant.isMutant = this.mutantsDnaVerification.checkDnaDiagonals(dna);
    return mutant;
  }
}
