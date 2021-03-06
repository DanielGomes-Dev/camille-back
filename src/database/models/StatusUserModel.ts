import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class StatusUserModel extends Model {
  private id!: number;
  private status!: string;
}

StatusUserModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    status: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "statusUser",
  }
);

// Contact.hasOne(Address, { foreignKey: 'courseId', as: 'lessons' });
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
