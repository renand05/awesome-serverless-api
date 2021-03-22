import { Controller, Post, Get } from '@nestjs/common';
import { MutantsService } from './mutants.service';

@Controller('mutants')
export class MutantsController {
  constructor(private readonly appService: MutantsService) { }

  @Post()
  create(): string {
    return this.appService.create();
  }

  @Get()
  get(): string {
    return this.appService.get();
  }
}
