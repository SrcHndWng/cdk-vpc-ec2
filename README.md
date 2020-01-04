# cdk-vpc-ec2

## About This

This is a sample project to create EC2 Instance in VPC.

## Cautions

The VPC has no inbound rules, so you have to create rules before connect to EC2.

Before run, prepare below.

* ~/.aws/credentials
    * access key, secret key, region
* EC2 Keypair
* .config/config-dev.json
    * $ cp .config/config-sample.json .config/config-dev.json
    * ami ・・・ your favorite ec2 ami id
    * keyName ・・・ your Keypair name

## Useful commands

 * `npm run build`                  compile typescript to js
 * `npm run watch`                  watch for changes and compile
 * `npm run test`                   perform the jest unit tests
 * `npx cdk deploy -c stage=dev`    deploy this stack to your default AWS account/region
 * `npx cdk diff -c stage=dev`      compare deployed stack with current state
 * `npx cdk synth -c stage=dev`     emits the synthesized CloudFormation template
 * `npx cdk destroy -c stage=dev`   remove all
