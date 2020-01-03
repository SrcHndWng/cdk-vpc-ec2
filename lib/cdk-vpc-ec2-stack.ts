import cdk = require('@aws-cdk/core');
import ec2 = require('@aws-cdk/aws-ec2')
import { environments as envs } from '../.config/environments'

export class CdkVpcEc2Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const vpc = new ec2.Vpc(this, 'myVpc', {
      cidr: '10.0.0.0/16',
    })

    // vpc has no inbound rules.
    const securityGroup = new ec2.SecurityGroup(this, 'mySecurityGroup', {
      vpc: vpc,
      securityGroupName: 'mySecurityGroup',
    })

    const instance = new ec2.CfnInstance(this, 'myEC2', {
      imageId: envs.ami,
      instanceType: 't2.micro',
      keyName: envs.keyName,
      subnetId: vpc.publicSubnets[0].subnetId,
      securityGroupIds: [securityGroup.securityGroupId]
    })

    new cdk.CfnOutput(this, 'VPC', { value: vpc.vpcId })
    new cdk.CfnOutput(this, 'Security Group', { value: securityGroup.securityGroupId })
    new cdk.CfnOutput(this, 'EC2 PublicIP', { value: instance.attrPublicIp })
  }
}
