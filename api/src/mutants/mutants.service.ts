import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MutantsDto } from './mutants.dto';
import { MutantsDnaVerification } from './mutants.verification'

// import * as AWS from 'aws-sdk';

// const dynamoDB = new AWS.DynamoDB.DocumentClient();


@Injectable()
export class MutantsService {
  constructor(private mutantsDnaVerification: MutantsDnaVerification) { }
  get(): string {
    return 'Hello World!';
  }

  async create(mutant: MutantsDto): Promise<MutantsDto> {
    const { dna } = mutant;

    mutant.id = dna.join('').toLowerCase();
    mutant.isMutant = this.mutantsDnaVerification.isDnaMutant(dna);
    // try {
    //   await dynamoDB
    //     .put({
    //       TableName: process.env.tableName,
    //       Item: mutant,
    //     })
    //     .promise();
    // } catch (error) {
    //   throw new InternalServerErrorException(error);
    // }
    return mutant;
  }
}
