import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { StoreCategory } from "./StoreCategory";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductCategory extends Model {
  private id!: number;
  private type!: string;
}

ProductCategory.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.STRING },
    categoryStoreId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productCategory",
  }
);

ProductCategory.hasOne(StoreCategory, {
  foreignKey: "categoryStoreId",
  as: "categoryStore",
});
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
