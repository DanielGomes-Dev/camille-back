import { Router } from "express";
import UserController from "../controllers/UserController";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class UserRouter {
  authVerify = new authVerify();
  private userController = new UserController();
  constructor(private router: Router) {
    this.router.get("/users", this.userController.index);
    this.router.get(
      "/user",
      this.authVerify.getUserByJwtToken,
      this.userController.show
    );

    this.router.post(
      "/user/login",
      this.authVerify.getUserByJwtToken,
      this.userController.login
    );
    this.router.post("/user/register", this.userController.register);
    // this.router.get("/user/:id", this.userController.getUser);
    // this.router.put("/user/:id", this.userController.updateUser);
    // this.router.delete("/user/:id", this.userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
