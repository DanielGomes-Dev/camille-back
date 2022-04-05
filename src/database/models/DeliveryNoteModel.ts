import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { UserDeliverModel } from "./UserDeliverModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class DeliveryNoteModel extends Model {
  private _id!: number;
  private _note!: number;
  private _comment!: string;
  private _deliverId!: number;
}

DeliveryNoteModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    note: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.STRING },
    userBuyerId: { type: DataTypes.INTEGER },
    deliverId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "deliveryNote",
  }
);

DeliveryNoteModel.belongsTo(UserDeliverModel, {
  foreignKey: "deliverId",
  as: "deliver",
});

DeliveryNoteModel.belongsTo(UserDeliverModel, {
  foreignKey: "userId",
  as: "user",
});
