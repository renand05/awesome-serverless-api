import { Module } from '@nestjs/common';
import { MutantsController } from './mutants.controller';
import { MutantsRepository } from './mutants.repository';
import { MutantsService } from './mutants.service';
import { MutantsDnaVerification } from './mutants.verification';

@Module({
  imports: [],
  controllers: [MutantsController],
  providers: [MutantsService, MutantsDnaVerification, MutantsRepository],
})
export class MutantsModule {}
