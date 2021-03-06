import { TypesUserModel } from "../database/models/TypesUserModel";
import { UserSellerModel } from "../database/models/UserSellerModel";
import jwtGenerate from "../interfaces/JwtInterface";
import userInterface from "../interfaces/UserInterface";
import JwtService from "./VerifyJWT";

interface userLogin {
  email: string;
  password: string;
}

interface userPayloadInterface {
  id: number;
  email: string;
  name: string;
  cpf: string;
}

class UserSellerService {
  async showUserLogged(id: number) {
    return await UserSellerModel.findByPk(id, {
      attributes: ["id", "email", "cpf", "name"],
    });
  }

  async showUsers() {
    return await UserSellerModel.findAll({
      attributes: ["id", "email", "cpf", "name"],
    });
  }

  jwt: JwtService = new JwtService();

  async createUser(user: userInterface) {
    return await UserSellerModel.create(user);
  }

  async login(user: userLogin): Promise<any> {
    const userLoged = await UserSellerModel.findOne({
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
    const authUser = this.jwt.create(userFormated, "Seller");
    return authUser;
  }
}

export default new UserSellerService();
