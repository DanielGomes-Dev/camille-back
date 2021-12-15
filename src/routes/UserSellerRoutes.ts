import { Router } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class UserSellerRoutes {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private userSellerController: ControllerInterface
  ) {
    this.router.get(
      "/usersSeller",
      this.authVerify.getUserByJwtToken,
      this.userSellerController.index
    );

    this.router.post(
      "/userSeller/login",
      //this.authVerify.getUserByJwtToken,
      this.userSellerController.show
    );

    this.router.post("/userSeller/register", userSellerController.create);
    // this.router.get("/user", userSellerController.show);
    // this.router.put("/user/:id", userController.updateUser);
    // this.router.delete("/user/:id", userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
