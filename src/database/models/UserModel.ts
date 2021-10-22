import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { Address } from "./AdressModel";
import { Contact } from "./ContactModel";
import { StatusUser } from "./StatusUserModel";
import { TypesUser } from "./TypesUserModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class User extends Model {
  private _id!: number;
  private _email!: string;
  private _password!: string;
  private _cpf!: string;
  private _name!: string;
  private _typeUserId!: string;
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
}

User.init(
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
    tableName: "users",
  }
);

User.hasOne(Address, { foreignKey: "addressId", as: "address" });
Address.belongsTo(User, { foreignKey: "addressId", as: "user" });

User.hasOne(Contact, { foreignKey: "contactId", as: "contact" });

Contact.belongsTo(User, { foreignKey: "contactId", as: "user" });

User.hasOne(TypesUser, { foreignKey: "typeUserId", as: "types" });

User.hasOne(StatusUser, { foreignKey: "statusId", as: "status" });
