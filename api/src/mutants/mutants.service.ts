import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MutantsDto } from './mutants.dto';
import { MutantsDnaVerification } from './mutants.verification';

import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";


const client = new DynamoDB({ region: "us-west-2" });
const TableName = process.env.tableName;


@Injectable()
export class MutantsService {
  constructor(private mutantsDnaVerification: MutantsDnaVerification) { }
  get(): string {
    return 'Hello World!';
  }

  async create(mutant: MutantsDto): Promise<MutantsDto> {
    const { dna } = mutant;

    mutant.id = dna.join('').toLowerCase();
    mutant.alias = mutant.alias
    mutant.isMutant = this.mutantsDnaVerification.isDnaMutant(dna);
    try {
      const Item = marshall(mutant);
      const data = await client.putItem({ TableName, Item });
      return mutant;
    } catch (err) {
      throw err
    }
  }
}
