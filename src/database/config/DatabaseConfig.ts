// eslint-disable-next-line @typescript-eslint/no-var-requires
const env = require("dotenv-safe");

const DatabaseConfig = {
  // dialect: "sqlite",
  dialect: env.config().parsed?.DB_DIALECT,
  host: env.config().parsed?.DB_HOST,
  username: env.config().parsed?.DB_USER,
  password: env.config().parsed?.DB_PASSWORD,
  database: env.config().parsed?.DB_NAME,
  // storage: "./database.sqlite",
};

module.exports = DatabaseConfig;
