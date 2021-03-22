import { Module } from '@nestjs/common';
import { MutantsController } from './mutants/mutants.controller';
import { MutantsService } from './mutants/mutants.service';

@Module({
  imports: [],
  controllers: [MutantsController],
  providers: [MutantsService],
})
export class AppModule { }
