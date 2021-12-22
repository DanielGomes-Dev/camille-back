import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class ContactModel extends Model {
  private id!: number;
  private number!: string;
  // private email!: string;
}

ContactModel.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: { type: DataTypes.STRING },
    // email: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "contacts",
  }
);

// Contact.hasOne(Address, { foreignKey: 'courseId', as: 'lessons' });
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
