import { Controller, Post, Get } from '@nestjs/common';
import { MutantsService } from './mutants.service';

@Controller('mutants')
export class MutantsController {
  constructor(private readonly mutantService: MutantsService) { }

  @Post()
  create(): string {
    return this.mutantService.create();
  }

  @Get()
  get(): string {
    return this.mutantService.get();
  }
}
