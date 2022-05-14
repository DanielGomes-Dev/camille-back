import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { AddressModel } from "./AdressModel";
import { ContactModel } from "./ContactModel";
import { StatusUserModel } from "./StatusUserModel";
import { TypesUserModel } from "./TypesUserModel";
import { VehiclesModel } from "./VehiclesModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class UserDeliverModel extends Model {
  private _id!: number;
  private _photo!: string;

  private _email!: string;
  private _password!: string;
  private _cpf!: string;
  private _name!: string;
  private _CNH!: string;

  public types!: any;
  private _typeUserId!: number;
  private _contactId!: number;
  private _addressId!: number;
  private _status!: string;
  private _NCDate!: Date;

  get id(): number {
    return this._id;
  }

  get email(): string {
    return this._email;
  }

  get cpf(): string {
    return this._cpf;
  }

  get name(): string {
    return this._name;
  }

  get typeUserId(): number {
    return this._typeUserId;
  }
}

UserDeliverModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    photo: { type: DataTypes.STRING },

    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    cpf: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    CNH: { type: DataTypes.STRING },

    typeUserId: { type: DataTypes.INTEGER },
    contactId: { type: DataTypes.INTEGER },
    addressId: { type: DataTypes.INTEGER },
    statusId: { type: DataTypes.INTEGER },
    NCDate: { type: DataTypes.DATE },
  },
  {
    sequelize: dbConnect,
    tableName: "usersDeliver",
  }
);

UserDeliverModel.belongsTo(AddressModel, {
  foreignKey: "addressId",
  as: "address",
});

UserDeliverModel.belongsTo(ContactModel, {
  foreignKey: "contactId",
  as: "contact",
});

UserDeliverModel.belongsTo(TypesUserModel, {
  constraints: true,
  foreignKey: "typeUserId",
  as: "types",
});

UserDeliverModel.belongsTo(StatusUserModel, {
  foreignKey: "statusId",
  as: "status",
});
