import { User } from "../database/models/UserModel";
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

class UserService {
  // async showUsers() {
  //   return await User.findAll();
  // }

  jwt: JwtService = new JwtService();

  async createUser(user: userInterface) {
    const newUser = await User.create(user);
    return newUser;
  }

  async login(user: userLogin): Promise<any> {
    const userLoged = await User.findOne({
      where: { email: user.email, password: user.password },
    });
    if (!userLoged) throw "Usuario Não Encontrado";
    const userFormated: jwtGenerate = {
      id: userLoged.id,
      email: userLoged.email,
      cpf: userLoged.cpf,
      name: userLoged.name,
    };
    const authUser = this.jwt.create(userFormated);
    return authUser;
  }
}

export default new UserService();
