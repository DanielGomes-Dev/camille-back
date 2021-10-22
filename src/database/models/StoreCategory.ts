import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class StoreCategory extends Model {
  private id!: number;
  private status!: string;
}

StoreCategory.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "statusUser",
  }
);

// StoreCategory.hasMany(productCategory, { foreignKey: 'courseId', as: 'lessons' });
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
