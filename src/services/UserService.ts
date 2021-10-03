import { User } from "../database/models/UserModel";
import userInterface from "../interfaces/UserInterface";

class UserService {
  async showUsers() {
    return await User.findAll();
  }
  async createUser(user: userInterface) {
    return await User.create(user);
  }
}

export default new UserService();
