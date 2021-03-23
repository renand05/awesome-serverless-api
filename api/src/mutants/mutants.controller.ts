import { Controller, Body, Post, Get } from '@nestjs/common';
import { MutantsService } from './mutants.service';
import { MutantsDto } from './mutants.dto';

@Controller('mutants')
export class MutantsController {
  constructor(private readonly mutantService: MutantsService) {}

  @Post()
  async create(@Body() mutantsDto: MutantsDto): Promise<MutantsDto> {
    return await this.mutantService.create(mutantsDto);
  }

  @Get()
  get(): string {
    return this.mutantService.get();
  }
}
