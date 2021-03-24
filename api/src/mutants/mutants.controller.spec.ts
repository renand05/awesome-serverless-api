import { Test, TestingModule } from '@nestjs/testing';
import { MutantsController } from './mutants.controller';
import { MutantsService } from './mutants.service';
import { MutantsRepository } from './mutants.repository';
import { MutantsDnaVerification } from './mutants.verification';

export class MutantsRepositoryFake {
  public create(): string {
    return '';
  }
}

describe('MutantsController', () => {
  let mutantsService: MutantsService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MutantsController],
      providers: [
        MutantsService,
        MutantsDnaVerification,
        {
          provide: MutantsRepository,
          useClass: MutantsRepositoryFake,
        },
      ],
    }).compile();

    mutantsService = app.get<MutantsService>(MutantsService);
  });

  describe('root', () => {
    it('should return mutant-person object', async () => {
      const body = {
        id: undefined,
        alias: 'test',
        dna: ['AAAAAA', 'AAAAAAA', 'AAAAAA', 'AAAAAA'],
      };
      const response = await mutantsService.create(body);
      expect(response).toBe(body);
    });
  });
});
