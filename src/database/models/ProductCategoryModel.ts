import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { TypeProductModel } from "./TypeProductModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductCategoryModel extends Model {
  private _id!: number;
  private _category!: string;
  private _iconUrl!: string;
  private _typeProduct!: number;
}

ProductCategoryModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.STRING },
    iconUrl: { type: DataTypes.STRING },
    typeProduct: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productCategory",
  }
);

ProductCategoryModel.belongsTo(TypeProductModel, {
  foreignKey: "typeProduct",
  as: "type",
});
