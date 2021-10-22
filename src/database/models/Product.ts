import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { ProductCategory } from "./ProductCategory";
import { Store } from "./Store";

const dbConnect = new DatabaseConnect().dbConnect;

export class Product extends Model {
  private id!: number;
  private status!: string;
}

Product.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING },
    stock: { type: DataTypes.INTEGER },
    price: { type: DataTypes.FLOAT },
    active: { type: DataTypes.BOOLEAN },
    saleOff: { type: DataTypes.BOOLEAN },
    // categoryProductId: { type: DataTypes.INTEGER },
    // storeId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "products",
  }
);

Product.hasOne(ProductCategory, {
  constraints: true,
  foreignKey: "categoryProductId",
  as: "category",
});

Product.belongsTo(Store, {
  constraints: true,
  foreignKey: "storeId",
  as: "store",
});
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
