import cdk = require('@aws-cdk/core');
import ec2 = require('@aws-cdk/aws-ec2')
import fs = require('fs');

export class CdkVpcEc2Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const stage: string = this.node.tryGetContext("stage") ? this.node.tryGetContext("stage") : 'dev';
    const config = JSON.parse(fs.readFileSync(`.config/config-${stage}.json`, {encoding: 'utf-8'}));

    const vpc = new ec2.Vpc(this, 'myVpc', {
      cidr: '10.0.0.0/16',
    })

    // vpc has no inbound rules.
    const securityGroup = new ec2.SecurityGroup(this, 'mySecurityGroup', {
      vpc: vpc,
      securityGroupName: 'mySecurityGroup',
    })

    const instance = new ec2.CfnInstance(this, 'myEC2', {
      imageId: config.ami,
      instanceType: 't2.micro',
      keyName: config.keyName,
      subnetId: vpc.publicSubnets[0].subnetId,
      securityGroupIds: [securityGroup.securityGroupId]
    })

    new cdk.CfnOutput(this, 'stage', { value: stage })
    new cdk.CfnOutput(this, 'VPC', { value: vpc.vpcId })
    new cdk.CfnOutput(this, 'Security Group', { value: securityGroup.securityGroupId })
    new cdk.CfnOutput(this, 'EC2 PublicIP', { value: instance.attrPublicIp })
  }
}
