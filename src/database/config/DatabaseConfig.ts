// eslint-disable-next-line @typescript-eslint/no-var-requires
const env = require("dotenv-safe");

const DatabaseConfig = {
  // dialect: Dialect = "mysql";
  dialect: "mysql",
  host: "localhost",
  username: env.config().parsed?.DB_USER,
  password: env.config().parsed?.DB_PASSWORD,
  database: "camille_api",
  // storage: "./database.sqlite",
};

module.exports = DatabaseConfig;
