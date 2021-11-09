import { Router } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class ProductsRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private productController: ControllerInterface
  ) {
    this.router.get("/products/:id", this.productController.index);
    this.router.post(
      "/product",
      this.authVerify.getUserByJwtToken,
      productController.create
    );
    this.router.get("/product/:id", productController.show);
    // this.router.put("/user/:id", userController.updateUser);
    // this.router.delete("/user/:id", userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
