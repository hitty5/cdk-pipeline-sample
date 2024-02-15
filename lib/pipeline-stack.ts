import * as cdk from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {CodePipeline, CodePipelineSource, ShellStep} from "aws-cdk-lib/pipelines";
import {BucketStage} from "./bucket-stage";

export class PipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const source = CodePipelineSource.connection('hitty5/cdk-pipeline-sample', 'main', {
      connectionArn: "arn:aws:codestar-connections:eu-central-1:767398137829:connection/c9d28916-f6eb-4ade-9a43-e2f070f9da2a",
    });


    const pipeline = new CodePipeline(this, 'PipelineSample', {
      pipelineName: 'cdk-pipeline-sample',
      crossAccountKeys: true,
      synth: new ShellStep('Synth', {
        input: source,
        commands: ['npm install', 'npm run build', 'npx cdk synth'],
      }),
    });

    pipeline.addStage(new BucketStage(this, 'BucketStage',  {
      env: {account: process.env.TARGET_ACC, region: process.env.REGION},
    }));
  }
}
