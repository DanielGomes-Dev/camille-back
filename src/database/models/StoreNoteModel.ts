import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { UserBuyerModel } from "./UserBuyerModel";
import { UserDeliverModel } from "./UserDeliverModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class StoreNoteModel extends Model {
  private _id!: number;
  private _note!: number;
  private _comment!: string;
  private _storeId!: number;
}

StoreNoteModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    note: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.STRING },
    userBuyerId: { type: DataTypes.INTEGER },
    storeId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "storeNote",
  }
);

StoreNoteModel.belongsTo(UserDeliverModel, {
  foreignKey: "storeId",
  as: "store",
});

UserBuyerModel.belongsTo(UserDeliverModel, {
  foreignKey: "userId",
  as: "user",
});
