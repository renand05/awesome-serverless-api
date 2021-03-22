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
  getHello(): string {
    return this.appService.getHello();
  }
}
