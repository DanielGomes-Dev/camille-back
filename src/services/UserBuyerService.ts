import { AddressModel } from "../database/models/AdressModel";
import { TypesUserModel } from "../database/models/TypesUserModel";
import { UserBuyerModel } from "../database/models/UserBuyerModel";
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

class UserBuyerService {
  async showUserLogged(id: number) {
    return await UserBuyerModel.findByPk(id, {
      attributes: ["id", "email", "cpf", "name"],
      include: [
        {
          model: AddressModel,
          as: "address", // <---- HERE,
        },
      ],
    });
  }

  async showUsers() {
    return await UserBuyerModel.findAll({
      attributes: ["id", "email", "cpf", "name"],
      include: [
        {
          model: AddressModel,
          as: "address", // <---- HERE,
        },
      ],
    });
  }

  jwt: JwtService = new JwtService();

  async createUser(user: userInterface) {
    const newUser = await UserBuyerModel.create(user);
    return newUser;
  }

  async login(user: userLogin): Promise<any> {
    const userLoged = await UserBuyerModel.findOne({
      where: { email: user.email, password: user.password },
      attributes: ["id", "email", "cpf", "name"],
      include: [
        {
          model: TypesUserModel,
          as: "types", // <---- HERE,
          attributes: ["id", "type"],
        },
      ],
    });
    if (!userLoged) throw "Usuario Não Encontrado";
    console.log();
    const userFormated: jwtGenerate = {
      id: userLoged.id,
      email: userLoged.email,
      cpf: userLoged.cpf,
      name: userLoged.name,
      typeUser: userLoged.types.type,
    };
    const authUser = this.jwt.create(userFormated, "Buyer");
    return authUser;
  }
}

export default new UserBuyerService();
