import { Router } from "express";
import UserDeliverController from "../controllers/UserDeliverController";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class UserDeliverRoutes {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private UserDeliverController: UserDeliverController
  ) {
    this.router.get(
      "/usersDeliver",
      this.authVerify.getUserDeliverByJwtToken,
      this.UserDeliverController.index
    );

    this.router.post(
      "/userDeliver/login",
      //this.authVerify.getUserDeliverByJwtToken,
      this.UserDeliverController.show
    );

    this.router.post("/userDeliver/register", UserDeliverController.create);
    // this.router.get("/user", userDeliverController.show);
    // this.router.put("/user/:id", userController.updateUser);
    // this.router.delete("/user/:id", userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
