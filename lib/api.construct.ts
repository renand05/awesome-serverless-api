import { Construct, CfnOutput } from '@aws-cdk/core';
import { Table, AttributeType, BillingMode } from '@aws-cdk/aws-dynamodb';
import { resolve } from 'path';
import { LambdaRestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway';
import { Function, Code, Runtime, LayerVersion } from '@aws-cdk/aws-lambda';


export class ApiConstruct extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const table = new Table(this, 'Table', {
      partitionKey: { name: 'id', type: AttributeType.STRING },
      sortKey: { name: 'alias', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
    });

    const lambdaLayer = new LayerVersion(this, 'HandlerLayer', {
      code: Code.fromAsset(resolve(__dirname, '../api/node_modules')),
      compatibleRuntimes: [Runtime.NODEJS_12_X, Runtime.NODEJS_10_X],
      description: 'Api Handler Dependencies',
    });

    const mutantsRestApi = new Function(this, 'Handler', {
      code: Code.fromAsset(resolve(__dirname, '../api/dist'), {
        exclude: ['node_modules'],
      }),
      handler: 'main.api',
      runtime: Runtime.NODEJS_12_X,
      layers: [lambdaLayer],
      environment: {
        NODE_PATH: '$NODE_PATH:/opt',
        tableName: table.tableName,
      },
    });
    table.grantReadWriteData(mutantsRestApi);

    const api = new LambdaRestApi(this, "mutants-api", {
      restApiName: 'Mutants API',
      handler: mutantsRestApi,
      proxy: false,
    });

    const apiMutantsResource = api.root.addResource("mutants")

    apiMutantsResource.addMethod("GET", new LambdaIntegration(mutantsRestApi));
    apiMutantsResource.addMethod("POST", new LambdaIntegration(mutantsRestApi));

    new CfnOutput(this, "HTTP API URL", {
      value: api.url ?? "Something went wrong with the deploy",
    });

  }
}
