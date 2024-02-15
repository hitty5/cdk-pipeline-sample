import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class BucketStack extends Stack {

    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        /*new s3.Bucket(this, "MyBucket", {
            bucketName: "my-new-cdk-sample-demo-bucket",
        });*/
    }
}
