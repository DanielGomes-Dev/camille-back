import { Sequelize } from "sequelize";

class DatabaseConnect {
  dbConnect: Sequelize;

  constructor() {
    this.dbConnect = new Sequelize(require("./DatabaseConfig"));
  }
}

export default DatabaseConnect;
