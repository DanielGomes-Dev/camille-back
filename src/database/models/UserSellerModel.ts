import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { AddressModel } from "./AdressModel";
import { ContactModel } from "./ContactModel";
import { StatusUserModel } from "./StatusUserModel";
import { TypesUserModel } from "./TypesUserModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class UserSellerModel extends Model {
  private _id!: number;
  private _email!: string;
  private _password!: string;
  private _cpf!: string;
  private _name!: string;
  public types!: any;
  private _typeUserId!: number;
  private _contactId!: number;
  private _addressId!: number;
  private _status!: string;

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

UserSellerModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    cpf: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    typeUserId: { type: DataTypes.INTEGER },
    contactId: { type: DataTypes.INTEGER },
    addressId: { type: DataTypes.INTEGER },
    statusId: { type: DataTypes.INTEGER },
  },
  {
    sequelize: dbConnect,
    tableName: "usersSeller",
  }
);

UserSellerModel.belongsTo(AddressModel, {
  foreignKey: "addressId",
  as: "address",
});
AddressModel.hasOne(UserSellerModel, {
  foreignKey: "addressId",
  as: "userSeller",
});

UserSellerModel.belongsTo(ContactModel, {
  foreignKey: "contactId",
  as: "contact",
});
ContactModel.hasOne(UserSellerModel, {
  foreignKey: "contactId",
  as: "userSeller",
});

UserSellerModel.belongsTo(TypesUserModel, {
  constraints: true,
  foreignKey: "typeUserId",
  as: "types",
});

UserSellerModel.belongsTo(StatusUserModel, {
  foreignKey: "statusId",
  as: "status",
});
