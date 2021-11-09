import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { ProductCategoryModel } from "./ProductCategoryModel";
import { StoreModel } from "./StoreModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductModel extends Model {
  private id!: number;
  private name!: string;
  private code!: string;
  private photo!: string;
  private stock!: number;
  private price!: number;
  private active!: boolean;
  private saleOff!: boolean;
  private categoryProductId!: number;
  private storeId!: number;
}

ProductModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING },
    stock: { type: DataTypes.INTEGER },
    price: { type: DataTypes.FLOAT },
    active: { type: DataTypes.BOOLEAN },
    saleOff: { type: DataTypes.BOOLEAN },
    categoryProductId: { type: DataTypes.INTEGER },
    storeId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "products",
  }
);

ProductModel.belongsTo(ProductCategoryModel, {
  foreignKey: "categoryProductId",
  as: "category",
});

ProductModel.belongsTo(StoreModel, {
  foreignKey: "storeId",
  as: "store",
});
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
