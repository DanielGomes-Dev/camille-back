import { User } from "../database/models/UserModel";
import userInterface from "../interfaces/UserInterface";

interface userLogin {
  email: string;
  password: string;
}

class UserService {
  // async showUsers() {
  //   return await User.findAll();
  // }
  async createUser(user: userInterface) {
    return await User.create(user);
  }
  async login(user: userLogin) {
    return await User.findOne({
      where: { email: user.email, password: user.password },
    });
  }
}

export default new UserService();
