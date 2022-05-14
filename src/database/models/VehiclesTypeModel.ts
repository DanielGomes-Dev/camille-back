import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { UserDeliverModel } from "./UserDeliverModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class VehiclesTypeModel extends Model {
  private _id!: number;
  private _type!: string;
}

VehiclesTypeModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    type: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "vehiclesType",
  }
);
