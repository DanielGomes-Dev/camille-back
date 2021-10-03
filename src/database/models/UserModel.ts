import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { Address } from "./AdressModel";
import { Contact } from "./ContactModel";
import { TypesUser } from "./TypesUserModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class User extends Model {
  private id!: number;
  private email!: string;
  private password!: string;
  private cpf!: string;
  private nome!: string;
  private type!: string;
  private contact!: number;
  private address!: number;
  private status!: string;
}

User.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    cpf: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    // type: { type: DataTypes.STRING },
    // contact: { type: DataTypes.INTEGER },
    // address: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING },
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

User.hasOne(TypesUser, { foreignKey: "contactId", as: "types" });
