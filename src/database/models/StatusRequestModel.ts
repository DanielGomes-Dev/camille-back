import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class StatusRequestModel extends Model {
  private _id!: number;
  private _status!: string;

  get id(): number {
    return this._id;
  }
}

StatusRequestModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "statusRequest",
  }
);

// Contact.hasOne(Address, { foreignKey: 'courseId', as: 'lessons' });
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
