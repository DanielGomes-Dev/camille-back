import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { UserDeliverModel } from "./UserDeliverModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductNoteModel extends Model {
  private _id!: number;
  private _note!: number;
  private _comment!: string;
  private _productId!: number;
}

ProductNoteModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    note: { type: DataTypes.INTEGER },
    comment: { type: DataTypes.STRING },
    userBuyerId: { type: DataTypes.INTEGER },
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

ProductNoteModel.belongsTo(UserDeliverModel, {
  foreignKey: "userId",
  as: "user",
});
