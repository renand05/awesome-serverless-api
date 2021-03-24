import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MutantsDto {
  id: string;

  @Expose()
  dna: Array<string>;

  @Expose()
  alias: string;

  isMutant?: boolean;
}
