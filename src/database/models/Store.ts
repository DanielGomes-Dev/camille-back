import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { Address } from "./AdressModel";
import { Contact } from "./ContactModel";
import { Product } from "./Product";
import { StoreCategory } from "./StoreCategory";

const dbConnect = new DatabaseConnect().dbConnect;

export class Store extends Model {
  private id!: number;
  private status!: string;
}

Store.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING },
    companyName: { type: DataTypes.STRING },
    fantasyName: { type: DataTypes.STRING },
    owner: { type: DataTypes.STRING },
    CNPJ: { type: DataTypes.STRING },
    ie: { type: DataTypes.STRING },
    note: { type: DataTypes.STRING },
    // contactId: { type: DataTypes.STRING },
    // addressId: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "stores",
  }
);

Store.hasOne(Contact, {
  constraints: true,
  foreignKey: "contactId",
  as: "contact",
});
Store.hasOne(Address, {
  constraints: true,
  foreignKey: "addressId",
  as: "address",
});
Store.hasOne(StoreCategory, {
  constraints: true,
  foreignKey: "categoryId",
  as: "category",
});
Store.hasMany(Product, {
  constraints: true,
  foreignKey: "productId",
  as: "product",
});

// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
