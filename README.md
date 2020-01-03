# cdk-vpc-ec2

## About This

This is a sample project to create EC2 Instance in VPC.

## Cautions

The VPC has no inbound rules, so you have to create rules before connect to EC2.

Before run, prepare below.

* ~/.aws/credentials
    * access key, secret key, region
* EC2 Keypair
* ~/.config/environments.ts
    * ami ・・・ your favorite ec2 ami id
    * keyName ・・・ your Keypair name

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `npm run deploy`  deploy this stack to your default AWS account/region
 * `npm run diff`    compare deployed stack with current state
 * `npm run synth`   emits the synthesized CloudFormation template
