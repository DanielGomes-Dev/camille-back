import { Model, DataTypes } from "sequelize";
import DatabaseConnect from "../config/DatabaseConnect";

const dbConnect = new DatabaseConnect().dbConnect;

export class Address extends Model {
  private id!: number;
  private street!: string;
  private number!: number;
  private district!: string;
  private city!: string;
  private state!: string;
  private cep!: string;
}

Address.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    street: { type: DataTypes.STRING },
    number: { type: DataTypes.INTEGER },
    district: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    state: { type: DataTypes.STRING },
    cep: { type: DataTypes.STRING },
  },
  {
    sequelize: dbConnect,
    tableName: "address",
  }
);

// Address.hasOne(Address, { foreignKey: 'courseId', as: 'lessons' });
// Lesson.belongsTo(Course, { foreignKey: 'courseId', as: 'course' });
