// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

const DatabaseConfig = {
  dialect: process.env.DB_DIALECT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  seederStorage: "sequelize",
};

module.exports = DatabaseConfig;
