# CDK Pipelines Sample

Contains sample pipeline to demonstrate the usage of CDK pipelines. The sample pipeline requires one account as the
deployment account hosting the CDK pipeline and one account has the target account where the stack resources get
deployed to.

## Bootstrap

First you need to boostrap your accounts.

For the deployment account

```bash
npx cdk bootstrap aws://$DEPLOY_ACC/$REGION  \
    --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess
```

For the target account

```bash
npx cdk bootstrap aws://$TARGET_ACC/$REGION \
    --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
    --trust $DEPLOY_ACC
```

## Deploy CDK pipeline

Assume role of deployment account first.

```bash
cdk deploy
```