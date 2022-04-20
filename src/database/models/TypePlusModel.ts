import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class TypePlusModel extends Model {
  private _id!: number;
  private _type!: string;

  get id(): number {
    return this._id;
  }
}

TypePlusModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "typePlus",
  }
);
