# CDK-TypeScript-NestJS project:

This is a project in TypeScript + NestJS with AWS-CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Structure

The project contains two main folders:

 * `lib`       contains infrastructure details following aws-cdk.
 * `api`       contains the api developed following Dependency Injection from NestJS

## Useful commands on `api`

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 
 ## Useful commands on `lib`
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

