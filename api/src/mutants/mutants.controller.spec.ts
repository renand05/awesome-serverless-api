import { Test, TestingModule } from '@nestjs/testing';
import { MutantsController } from './mutants.controller';
import { MutantsService } from './mutants.service';

describe('AppController', () => {
  let appController: MutantsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MutantsController],
      providers: [MutantsService],
    }).compile();

    appController = app.get<MutantsController>(MutantsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
