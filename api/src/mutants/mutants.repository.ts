import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { MutantsDto } from './mutants.dto';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';

const client = new DynamoDB({ region: 'us-west-2' });
const TableName = process.env.tableName || 'tableName';

@Injectable()
export class MutantsRepository {
  async create(mutant: MutantsDto) {
    const Item = marshall(mutant);
    return await client.putItem({ TableName, Item });
  }
}
