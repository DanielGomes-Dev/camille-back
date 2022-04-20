import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { ProductFoodModel } from "./ProductFoodModel";
import { StoreModel } from "./StoreModel";
import { TypePlusModel } from "./TypePlusModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class ProductFoodPlusModel extends Model {
  private _id!: number;
  private _name!: string;
  private _price!: number;
  private _productId!: number;
  private _storeId!: number;
  private _typePlusId!: number;

  get id(): number {
    return this._id;
  }
  get productId(): number {
    return this._productId;
  }
  get storeId(): number {
    return this._storeId;
  }
}

ProductFoodPlusModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.FLOAT },
    productId: { type: DataTypes.INTEGER },
    storeId: { type: DataTypes.INTEGER },
    typePlusId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "productsFoodPlus",
  }
);

ProductFoodPlusModel.belongsTo(StoreModel, {
  foreignKey: "storeId",
  as: "store",
});

ProductFoodPlusModel.belongsTo(TypePlusModel, {
  foreignKey: "typePlusId",
  as: "typePlus",
});
