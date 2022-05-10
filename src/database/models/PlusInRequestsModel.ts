import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { ProductFoodPlusModel } from "./ProductFoodPlusModel ";

const dbConnect = new DatabaseConnect().dbConnect;

export class PlusInRequestsModel extends Model {
  private _id!: number;
  private _requestId!: number;
  private _plusId!: number;

  get id(): number {
    return this._id;
  }
  // get requestId(): number {
  //   return this._requestId;
  // }
  // get plusId(): number {
  //   return this._plusId;
  // }
}

PlusInRequestsModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    requestId: { type: DataTypes.INTEGER },
    plusId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "plusInRequests",
  }
);

// PlusInRequestsModel.belongsTo(RequestModel, {
//   foreignKey: "requestId",
//   as: "request",
// });

PlusInRequestsModel.belongsTo(ProductFoodPlusModel, {
  foreignKey: "plusId",
  as: "plus",
});
