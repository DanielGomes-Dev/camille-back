import { TypesUserModel } from "../database/models/TypesUserModel";
import { UserDeliverModel } from "../database/models/UserDeliverModel";
import jwtGenerate from "../interfaces/JwtInterface";
import userInterface from "../interfaces/UserInterface";
import JwtService from "./VerifyJWT";

interface userLogin {
  email: string;
  password: string;
}

//Parei Aqui
class UserDeliverService {
  async showUserLogged(id: number) {
    return await UserDeliverModel.findByPk(id, {
      attributes: ["id", "email", "cpf", "name"],
    });
  }

  async showUsers() {
    return await UserDeliverModel.findAll({
      attributes: ["id", "email", "cpf", "name"],
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
      include: [
        {
          model: TypesUserModel,
          as: "types", // <---- HERE,
          attributes: ["id", "type"],
        },
      ],
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
