// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const awsmobile = {
aws_cloud_logic : 'enable',
aws_cloud_logic_custom : '[{"id":"ih6nxas269","name":"ReactSample","description":"","endpoint":"https://ih6nxas269.execute-api.us-east-1.amazonaws.com/Development","region":"us-east-1","paths":["/items","/items/123"]}]',
aws_cognito_identity_pool_id : 'us-east-1:0df38000-a5f6-4c3e-b628-7b0543d9f30c',
aws_cognito_region : 'us-east-1',
aws_content_delivery : 'enable',
aws_content_delivery_bucket : 'share-hosting-mobilehub-849015618',
aws_content_delivery_bucket_region : 'us-east-1',
aws_content_delivery_cloudfront : 'enable',
aws_content_delivery_cloudfront_domain : 'd1xcimoiv1foy4.cloudfront.net',
aws_dynamodb : 'enable',
aws_dynamodb_all_tables_region : 'us-east-1',
aws_dynamodb_table_schemas : '[{"tableName":"share-mobilehub-849015618-bbq_orders","attributes":[{"name":"id","type":"S"}],"indexes":[],"region":"us-east-1","hashKey":"id"},{"tableName":"share-mobilehub-849015618-bbq_restaurants","attributes":[{"name":"id","type":"S"}],"indexes":[],"region":"us-east-1","hashKey":"id"},{"tableName":"share-mobilehub-849015618-bbq_menu_item","attributes":[{"name":"restaurant_id","type":"S"},{"name":"id","type":"S"}],"indexes":[],"region":"us-east-1","hashKey":"restaurant_id","rangeKey":"id"}]',
aws_project_id : 'b65a93b1-4d9b-4c32-bbb1-618087bc9753',
aws_project_name : 'shARe',
aws_project_region : 'us-east-1',
aws_resource_bucket_name : 'share-deployments-mobilehub-849015618',
aws_resource_name_prefix : 'share-mobilehub-849015618',
aws_sign_in_enabled : 'enable',
aws_user_pools : 'enable',
aws_user_pools_id : 'us-east-1_Zv5pvOVPC',
aws_user_pools_mfa_type : 'ON',
aws_user_pools_web_client_id : '22pqbbijuoijvdghe5da6l0mev',
}

export default awsmobile;
var AWS = require('aws-sdk');
AWS.config.region = awsmobile.aws_project_region;
AWS.config.update({customUserAgent: 'MobileHub v0.1'});