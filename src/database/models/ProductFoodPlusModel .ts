import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { ProductCategoryModel } from "./ProductCategoryModel";
import { StoreModel } from "./StoreModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductFoodPlusModel extends Model {
  private id!: number;
  private name!: string;
  private description!: string;
  private code!: string;
  private photo!: string;
  private stock!: number;
  private price!: number;
  private active!: boolean;
  private saleOff!: boolean;
  private categoryProductId!: number;
  private storeId!: number;
}

ProductFoodPlusModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    active: { type: DataTypes.BOOLEAN },
    saleOff: { type: DataTypes.BOOLEAN },
    productId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productsFoodPlus",
  }
);

ProductFoodPlusModel.belongsTo(StoreModel, {
  foreignKey: "productId",
  as: "product",
});
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
