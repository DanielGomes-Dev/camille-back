import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { AddressModel } from "./AdressModel";
import { StatusRequestModel } from "./StatusRequestModel";
import { ProductModel } from "./ProductModel";
import { StoreModel } from "./StoreModel";
import { UserBuyerModel } from "./UserBuyerModel";
import { ProductFoodModel } from "./ProductFoodModel";
import { UserDeliverModel } from "./UserDeliverModel";
import { ProductSizeModel } from "./ProductSizeModel";
import { ProductColorModel } from "./ProductColorModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class RequestModel extends Model {
  private _id!: number;
  private _storeId!: number;
  private _userId!: number;
  private _statusId!: number;
  private _productId!: number;
  private _productFoodId!: number;
  private _addressId!: number;
  private _deliverId!: number;
  private _quantity!: number;
  private _sizeId!: number;
  private _colorId!: number;

  get id(): number {
    return this._id;
  }
}

RequestModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    storeId: { type: DataTypes.INTEGER },
    userId: { type: DataTypes.INTEGER },
    statusId: { type: DataTypes.INTEGER },
    productId: { type: DataTypes.INTEGER },
    productFoodId: { type: DataTypes.INTEGER },
    addressId: { type: DataTypes.INTEGER },
    quantity: { type: DataTypes.INTEGER },
    sizeId: { type: DataTypes.INTEGER },
    colorId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "requests",
  }
);

RequestModel.belongsTo(StoreModel, {
  foreignKey: "storeId",
  as: "store",
});

RequestModel.belongsTo(UserBuyerModel, {
  foreignKey: "userId",
  as: "user",
});

RequestModel.belongsTo(UserDeliverModel, {
  foreignKey: "deliverId",
  as: "userDeliver",
});

RequestModel.belongsTo(StatusRequestModel, {
  foreignKey: "statusId",
  as: "status",
});

RequestModel.belongsTo(ProductModel, {
  foreignKey: "productId",
  as: "product",
});

RequestModel.belongsTo(ProductFoodModel, {
  foreignKey: "productFoodId",
  as: "productFood",
});

RequestModel.belongsTo(AddressModel, {
  foreignKey: "addressId",
  as: "address",
});

RequestModel.belongsTo(ProductSizeModel, {
  foreignKey: "sizeId",
  as: "sizeProduct",
});

RequestModel.belongsTo(ProductColorModel, {
  foreignKey: "colorId",
  as: "colorProduct",
});
