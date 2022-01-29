import { Router } from "express";
import TypeProductController from "../controllers/TypeProductController";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class TypeProductRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private typeProductController: TypeProductController
  ) {
    // this.router.get("/storesCategory", this.storeController.index);
    this.router.get("/typeProduct", this.typeProductController.index);

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
