const requireEnv = [
  "PORT",
  "REDIS_HOST",
  "ACCESS_TOKEN_SECRET",
  "REFRESH_TOKEN_SECRET",
  "MYSQL_HOST",
  "MYSQL_USER",
  "MYSQL_PASSWORD",
  "MYSQL_DATABASE",
  "GITHUB_OAUTH_CLIENT_ID",
  "GITHUB_OAUTH_CLIENT_SECRET",
];
const index = requireEnv.findIndex((key) => !process.env[key]);
if (index > -1) {
  console.error("缺少环境变量: ", requireEnv[index]);
}
const port = process.env.PORT;
const redisHost = process.env.REDIS_HOST;
const redisPort = process.env.REDIS_PORT;
const redisPassword = process.env.REDIS_PWD; // 内网redis可以不用密码
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;
const mysqlHost = process.env.MYSQL_HOST;
const mysqlUser = process.env.MYSQL_USER;
const mysqlPwd = process.env.MYSQL_PASSWORD;
const mysqlDb = process.env.MYSQL_DATABASE;
const mysqlPort = process.env.MYSQL_PORT;
const githubOAuthClientId = process.env.GITHUB_OAUTH_CLIENT_ID;
const githubOAuthSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
const aliEmailUser = process.env.ALI_EMAIL_USER;
const aliEmailPwd = process.env.ALI_EMAIL_PASS;
export default {
  isProduction: process.env.NODE_ENV === "production",
  port: Number(port),
  redis: {
    host: redisHost,
    port: Number(redisPort) || 6379,
    password: redisPassword,
  },
  mysql: {
    host: mysqlHost as string,
    port: Number(mysqlPort) || 3006,
    user: mysqlUser as string,
    password: mysqlPwd as string,
    database: mysqlDb as string,
  },
  accessTokenSecret,
  refreshTokenSecret,
  github: {
    clientId: githubOAuthClientId,
    clientSecret: githubOAuthSecret,
  },
  aliEmail: {
    user: aliEmailUser,
    pass: aliEmailPwd,
  },
};
