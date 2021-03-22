import { Test, TestingModule } from '@nestjs/testing';
import { MutantsController } from './mutants.controller';
import { MutantsService } from './mutants.service';

describe('MutantsController', () => {
  let mutantsController: MutantsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MutantsController],
      providers: [MutantsService],
    }).compile();

    mutantsController = app.get<MutantsController>(MutantsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mutantsController.get()).toBe('Hello World!');
    });
    it('should return mutant-person object', () => {
      const body = { 'id': 'test', 'dna': ['1', '2', '3', '4'] }
      expect(mutantsController.create(body)).toBe(body);
    });
  });
});
