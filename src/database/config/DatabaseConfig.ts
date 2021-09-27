const DatabaseConfig = {
  // dialect: Dialect = "mysql";
  dialect: "sqlite",
  host: "localhost",
  // username = "root";
  // password = "root";
  database: "camille_api",
  storage: "./database.sqlite",
};

module.exports = DatabaseConfig;
