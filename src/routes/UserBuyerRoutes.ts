import { Router } from "express";
import UserBuyerController from "../controllers/UserBuyerController";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class UserBuyerRoutes {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private userBuyerController: UserBuyerController
  ) {
    this.router.get(
      "/usersBuyer",
      this.authVerify.getUserBuyerByJwtToken,
      this.userBuyerController.index
    );

    this.router.post(
      "/userBuyer/login",
      //this.authVerify.getUserBuyerByJwtToken,
      this.userBuyerController.show
    );

    this.router.post("/userBuyer/register", userBuyerController.create);
    // this.router.get("/user", userBuyerController.show);
    // this.router.put("/user/:id", userController.updateUser);
    // this.router.delete("/user/:id", userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
