import { Router } from "express";
import ProductCategoryController from "../controllers/ProductCategoryController";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class ProductCategoryRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private productCategoryController: ProductCategoryController
  ) {
    // this.router.get("/storesCategory", this.storeController.index);
    this.router.get("/productCategory", this.productCategoryController.index);
    this.router.get(
      "/productCategory/:id",
      this.productCategoryController.show
    );

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
