// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

console.log(process.env.DB_HOST, "ok");
const DatabaseConfig = {
  // dialect: "sqlite",
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // storage: "./database.sqlite",
};

module.exports = DatabaseConfig;
