import {Stage, StageProps} from 'aws-cdk-lib';
import {BucketStack} from './bucket-stack';
import {Construct} from "constructs";

export class BucketStage extends Stage {
    constructor(scope: Construct, id: string, props: StageProps) {
        super(scope, id, props);

        const bucketStack = new BucketStack(this, 'BitbucketStack', props);
    }
}