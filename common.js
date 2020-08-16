AWS.config.region = REGION;

const poolData = {
    UserPoolId: USER_POOL_ID,
    ClientId: APP_CLIENT_ID
}
userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const LOGINS_KEY = `cognito-idp.${REGION}.amazonaws.com/${USER_POOL_ID}`
