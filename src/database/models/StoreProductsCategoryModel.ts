import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class StoreProductsCategoryModel extends Model {
  private _id!: number;
  private _categoryStoreId!: number;
  private _categoryProductId!: number;

  get id(): number {
    return this._id;
  }

  get categoryProductId(): number {
    return this._categoryProductId;
  }
}

StoreProductsCategoryModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryProductId: { type: DataTypes.INTEGER },
    categoryStoreId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "storeProductsCategory",
  }
);
