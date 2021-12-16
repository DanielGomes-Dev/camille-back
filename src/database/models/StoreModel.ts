import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";
import { AddressModel } from "./AdressModel";
import { ContactModel } from "./ContactModel";
import { ProductCategoryModel } from "./ProductCategoryModel";
import { StatusStoreModel } from "./StatusStoreModel";
import { StoreCategoryModel } from "./StoreCategoryModel";
import { StoreProductsCategoryModel } from "./StoreProductsCategoryModel";
import { UserSellerModel } from "./UserSellerModel";

const dbConnect = new DatabaseConnect().dbConnect;

export class StoreModel extends Model {
  private _id!: number;
  private _email!: string;
  private _companyName!: string;
  private _fantasyName!: string;
  // private _owner!: number;
  private _CNPJ!: string;
  private _ie!: string;
  private _note!: string;
  public category!: StoreCategoryModel;
  private _categoryId!: number;
  private _contactId!: number;
  private _addressId!: number;

  get id(): number {
    return this._id;
  }
}

StoreModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING },
    companyName: { type: DataTypes.STRING },
    fantasyName: { type: DataTypes.STRING },
    // owner: { type: DataTypes.INTEGER },
    CNPJ: { type: DataTypes.STRING },
    ie: { type: DataTypes.STRING },
    note: { type: DataTypes.STRING },
    categoryId: { type: DataTypes.INTEGER },
    contactId: { type: DataTypes.INTEGER },
    addressId: { type: DataTypes.INTEGER },

    // contactId: { type: DataTypes.STRING },
    // addressId: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "stores",
  }
);

StoreModel.belongsTo(ContactModel, {
  constraints: true,
  foreignKey: "contactId",
  as: "contact",
});
StoreModel.belongsTo(AddressModel, {
  constraints: true,
  foreignKey: "addressId",
  as: "address",
});
StoreModel.belongsTo(StoreCategoryModel, {
  constraints: true,
  foreignKey: "categoryId",
  as: "category",
});

StoreModel.belongsTo(StatusStoreModel, {
  foreignKey: "statusId",
  as: "status",
});

StoreModel.belongsTo(UserSellerModel, {
  constraints: true,
  foreignKey: "ownerId",
  as: "owner",
});

// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
