import { Router } from "express";
import TypePlusController from "../controllers/TypePlusController";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class TypePlusRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private TypePlusController: TypePlusController
  ) {
    // this.router.get("/storesCategory", this.storeController.index);
    this.router.get("/typePlus", this.TypePlusController.index);

    // this.router.post(
    //   "/user/login",
    //   this.authVerify.getUserByJwtToken,
    //   this.userController.login
    // );
    // this.router.post(
    //   "/store/register",
    //   this.authVerify.getUserByJwtToken,
    //   this.storeController.create
    // );
    // this.router.get("/user/:id", this.userController.getUser);
    // this.router.put("/user/:id", this.userController.updateUser);
    // this.router.delete("/user/:id", this.userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
