import { Module } from '@nestjs/common';
import { MutantsController } from './mutants.controller';
import { MutantsService } from './mutants.service';
import { MutantsDnaVerification } from './mutants.verification';

@Module({
  imports: [],
  controllers: [MutantsController],
  providers: [MutantsService, MutantsDnaVerification],
})
export class MutantsModule {}
