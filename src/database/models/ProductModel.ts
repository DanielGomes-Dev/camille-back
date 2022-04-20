import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { ProductColorModel } from "./ProductColorModel";
import { ProductSizeModel } from "./ProductSizeModel";
import { ProductToCategoryModel } from "./ProductToCategoryModel";
import { StoreModel } from "./StoreModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductModel extends Model {
  private id!: number;
  private name!: string;
  private description!: string;
  private code!: string;
  private photo!: string;
  private weight!: string;
  private stock!: number;
  private price!: number;
  private active!: boolean;
  private saleOff!: boolean;
  private storeId!: number;
}

ProductModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    code: { type: DataTypes.STRING },
    photo: { type: DataTypes.STRING },
    weight: { type: DataTypes.STRING },
    stock: { type: DataTypes.INTEGER },
    price: { type: DataTypes.FLOAT },
    active: { type: DataTypes.BOOLEAN },
    saleOff: { type: DataTypes.BOOLEAN },
    storeId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "products",
  }
);

ProductModel.belongsTo(StoreModel, {
  foreignKey: "storeId",
  as: "store",
});

ProductModel.hasMany(ProductColorModel, {
  foreignKey: "productId",
  as: "colors",
});

ProductModel.hasMany(ProductSizeModel, {
  foreignKey: "productId",
  as: "sizes",
});

ProductModel.hasMany(ProductToCategoryModel, {
  foreignKey: "productId",
  as: "categorys",
});

ProductToCategoryModel.belongsTo(ProductModel, {
  constraints: true,
  foreignKey: "productId",
  as: "product",
});
