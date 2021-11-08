import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { StoreCategoryModel } from "./StoreCategoryModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductCategoryModel extends Model {
  private _id!: number;
  private _category!: string;
}

ProductCategoryModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.STRING },
    // categoryStoreId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productCategory",
  }
);

// ProductCategoryModel.hasOne(StoreCategoryModel, {
// foreignKey: "categoryStoreId",
// as: "categoryStore",
// });
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
