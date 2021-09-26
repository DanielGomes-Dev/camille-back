import { Sequelize } from "sequelize";
import DatabaseConfig from "./DatabaseConfig";

class DatabaseConnect {
  dbConnect: Sequelize;

  constructor(private databaseConfig: DatabaseConfig) {
    this.dbConnect = new Sequelize(databaseConfig);
  }
}

export default DatabaseConnect;
