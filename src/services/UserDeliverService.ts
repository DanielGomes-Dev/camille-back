import { TypesUserModel } from "../database/models/TypesUserModel";
import { UserDeliverModel } from "../database/models/UserDeliverModel";
import { VehiclesModel } from "../database/models/VehiclesModel";
import { VehiclesTypeModel } from "../database/models/VehiclesTypeModel";
import jwtGenerate from "../interfaces/JwtInterface";
import userInterface from "../interfaces/UserInterface";
import JwtService from "./VerifyJWT";

interface userLogin {
  email: string;
  password: string;
}

const includes = [
  {
    model: TypesUserModel,
    as: "types", // <---- HERE,
    attributes: ["id", "type"],
  },
  {
    model: VehiclesModel,
    as: "vehicle", // <---- HERE,
    include: [
      {
        model: VehiclesTypeModel,
        as: "vehicleType", // <---- HERE,
      },
    ],
  },
];
class UserDeliverService {
  async showUserLogged(id: number) {
    return await UserDeliverModel.findByPk(id, {
      attributes: ["id", "photo", "email", "name", "cpf", "CNH"],
      include: includes,
    });
  }

  async showUsers() {
    return await UserDeliverModel.findAll({
      attributes: ["id", "photo", "name"],
      include: includes,
    });
  }

  jwt: JwtService = new JwtService();

  async createUser(user: userInterface) {
    return await UserDeliverModel.create(user);
  }

  async login(user: userLogin): Promise<any> {
    const userLoged = await UserDeliverModel.findOne({
      where: { email: user.email, password: user.password },
      attributes: ["id", "email", "cpf", "name", "typeUserId", "statusId"],
      include: includes,
    });
    if (!userLoged) throw "Usuario Não Encontrado";
    const userFormated: jwtGenerate = {
      id: userLoged.id,
      email: userLoged.email,
      cpf: userLoged.cpf,
      name: userLoged.name,
      typeUser: userLoged.types.type,
    };
    const authUser = this.jwt.create(userFormated, "Deliver");
    return authUser;
  }
}

export default new UserDeliverService();
