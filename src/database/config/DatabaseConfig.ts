import { Dialect, Options } from "sequelize/types";

export default class DatabaseConfig implements Options {
  // dialect: Dialect = "mysql";
  dialect: Dialect = "sqlite";
  host = "localhost";
  // username = "root";
  // password = "root";
  database = "camille_api";
  storage = "./database.sqlite";
}
