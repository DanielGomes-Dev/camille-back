import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { ProductCategoryModel } from "./ProductCategoryModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class StoreCategoryModel extends Model {
  private _id!: number;
  private _category!: string;
  private _iconUrl!: ProductCategoryModel[];

  get id(): number {
    return this._id;
  }
  // get category(): string {
  //   return this._category;
  // }
}

StoreCategoryModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.STRING },
    iconUrl: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "storeCategory",
  }
);

// StoreCategory.hasMany(productCategory, { foreignKey: 'courseId', as: 'lessons' });
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
