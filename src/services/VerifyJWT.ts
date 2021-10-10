import jwt from "jsonwebtoken";
import env from "dotenv-safe";
import jwtGenerate from "../interfaces/JwtInterface";

interface tokenInterface {
  auth: boolean;
  token?: string;
  message?: string;
}

export default class JwtService {
  private SECRET: any = env.config().parsed?.SECRET;

  create(user: jwtGenerate): tokenInterface {
    const token = jwt.sign(user, this.SECRET, {
      //expiresIn: 300, // expires in 5min
    });
    console.log(token, "test");
    return { auth: true, token: token };
  }
  verify(token: string): any {
    if (!token) return { auth: false, message: "No token provided." };
    const decodedToken = jwt.verify(token, this.SECRET);
    return decodedToken;
  }
}
