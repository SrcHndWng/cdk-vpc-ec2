#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { CdkVpcEc2Stack } from '../lib/cdk-vpc-ec2-stack';

const app = new cdk.App();
new CdkVpcEc2Stack(app, 'CdkVpcEc2Stack');
