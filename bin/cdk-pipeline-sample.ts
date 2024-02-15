#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {PipelineStack} from '../lib/pipeline-stack';

const app = new cdk.App();
new PipelineStack(app, 'CdkPipelineSampleStack', {
    env: {account: process.env.DEPLOY_ACC, region: process.env.REGION},
});