import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { UserDeliverModel } from "./UserDeliverModel";
import { VehiclesTypeModel } from "./VehiclesTypeModel copy";

const dbConnect = new DatabaseConnect().dbConnect;

export class VehiclesModel extends Model {
  private _id!: number;
  private _photo!: string;
  private _placa!: string;
  private _chassi!: string;
  private _vehicleTypeId!: number;
  private _ownerVehicleId!: number;
  private _dealership!: string;
  private _modelCar!: string;
}

VehiclesModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    photo: { type: DataTypes.STRING },
    placa: { type: DataTypes.STRING },
    chassi: { type: DataTypes.STRING },
    vehicleTypeId: { type: DataTypes.INTEGER },
    dealership: { type: DataTypes.STRING },
    modelCar: { type: DataTypes.STRING },
    ownerVehicleId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "vehicles",
  }
);

VehiclesModel.belongsTo(UserDeliverModel, {
  foreignKey: "ownerVehicleId",
  as: "owner",
});

VehiclesModel.belongsTo(VehiclesTypeModel, {
  foreignKey: "vehicleTypeId",
  as: "vehicleType",
});
