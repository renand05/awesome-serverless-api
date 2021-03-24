import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MutantsDto } from './mutants.dto';
import { MutantsDnaVerification } from './mutants.verification';
import { MutantsRepository } from './mutants.repository';

@Injectable()
export class MutantsService {
  constructor(
    private mutantsDnaVerification: MutantsDnaVerification,
    private mutantsRepository: MutantsRepository,
  ) {}

  get(): string {
    return 'Hello World!';
  }

  async create(mutant: MutantsDto): Promise<MutantsDto> {
    const { dna } = mutant;

    mutant.id = dna.join('').toLowerCase();
    mutant.alias = mutant.alias;
    mutant.isMutant = this.mutantsDnaVerification.isDnaMutant(dna);
    try {
      await this.mutantsRepository.create(mutant);
      return mutant;
    } catch (err) {
      throw err;
    }
  }
}
