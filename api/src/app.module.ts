import { Module } from '@nestjs/common';
import { MutantsModule } from './mutants/mutants.module';

@Module({
  imports: [MutantsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
