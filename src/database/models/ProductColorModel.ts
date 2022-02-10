import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductColorModel extends Model {
  private _id!: number;
  private _colorName!: string;
  private _quantity!: number;
  private _productId!: number;

  get id(): number {
    return this._id;
  }
  get productId(): number {
    return this._productId;
  }
}

ProductColorModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    colorName: { type: DataTypes.STRING },
    productId: { type: DataTypes.INTEGER },
    quantity: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productColor",
  }
);
