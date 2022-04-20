import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductSizeModel extends Model {
  private _id!: number;
  private _productSize!: string;
  private _quantity!: number;
  private _productId!: number;

  get id(): number {
    return this._id;
  }
  get productId(): number {
    return this._productId;
  }
}

ProductSizeModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productSize: { type: DataTypes.STRING },
    quantity: { type: DataTypes.INTEGER },
    productId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productSize",
  }
);
