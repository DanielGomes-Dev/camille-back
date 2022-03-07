import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductToCategoryModel extends Model {
  private _id!: number;
  private _productId!: number;
  private _categoryId!: number;

  get id(): number {
    return this._id;
  }
  get productId(): number {
    return this._productId;
  }

  get categoryId(): number {
    return this._categoryId;
  }
}

ProductToCategoryModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productId: { type: DataTypes.INTEGER },
    categoryId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productToCategory",
  }
);

// ProductToCategoryModel.belongsTo(ProductModel, {
//   foreignKey: "productId",
//   as: "product",
// });

// ProductToCategoryModel.belongsTo(ProductCategoryModel, {
//   foreignKey: "categoryId",
//   as: "category",
// });
