import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { UserBuyerModel } from "./UserBuyerModel";
import { UserDeliverModel } from "./UserDeliverModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductNoteModel extends Model {
  private _id!: number;
  private _note!: number;
  private _comment!: string;
  private _usersBuyerId!: number;

  private _productId!: number;
}

ProductNoteModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    note: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.STRING },
    usersBuyerId: { type: DataTypes.INTEGER },
    productId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productNote",
  }
);

ProductNoteModel.belongsTo(UserDeliverModel, {
  foreignKey: "productId",
  as: "product",
});

ProductNoteModel.belongsTo(UserBuyerModel, {
  foreignKey: "usersBuyerId",
  as: "user",
});
