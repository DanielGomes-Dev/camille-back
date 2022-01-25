import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { ProductCategoryModel } from "./ProductCategoryModel";
import { StoreModel } from "./StoreModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductFoodModel extends Model {
  private id!: number;
  private name!: string;
  private description!: string;
  private code!: string;
  private photo!: string;
  private price!: number;
  private active!: boolean;
  private saleOff!: boolean;
  private categoryProductId!: number;
  private storeId!: number;
}

ProductFoodModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    active: { type: DataTypes.BOOLEAN },
    saleOff: { type: DataTypes.BOOLEAN },
    categoryProductId: { type: DataTypes.INTEGER },
    storeId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productsFood",
  }
);

ProductFoodModel.belongsTo(ProductCategoryModel, {
  foreignKey: "categoryProductId",
  as: "category",
});

ProductFoodModel.belongsTo(StoreModel, {
  foreignKey: "storeId",
  as: "store",
});
