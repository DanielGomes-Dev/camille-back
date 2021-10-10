import { User } from "../database/models/UserModel";
import userInterface from "../interfaces/UserInterface";

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
  async createUser(user: userInterface) {
    const newUser = await User.create(user);
    return newUser;
  }
  async login(user: userLogin): Promise<userPayloadInterface> {
    const userLoged = await User.findOne({
      where: { email: user.email, password: user.password },
    });

    if (!userLoged) throw "Usuario Não Encontrado";

    const userFormated: userPayloadInterface = {
      id: userLoged.id,
      email: userLoged.email,
      cpf: userLoged.cpf,
      name: userLoged.name,
    };

    return userFormated;
  }
}

export default new UserService();
