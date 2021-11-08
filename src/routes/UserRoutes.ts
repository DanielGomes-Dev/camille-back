import { Router } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class UserRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private userController: ControllerInterface
  ) {
    this.router.get(
      "/users",
      this.authVerify.getUserByJwtToken,
      this.userController.index
    );

    this.router.post(
      "/user/login",
      this.authVerify.getUserByJwtToken,
      this.userController.show
    );

    this.router.post("/user/register", userController.create);
    // this.router.get("/user/:id", userController.getUser);
    // this.router.put("/user/:id", userController.updateUser);
    // this.router.delete("/user/:id", userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
