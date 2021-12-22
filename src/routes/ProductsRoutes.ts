import { Router } from "express";
import ProductController from "../controllers/ProductConttroller";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class ProductsRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private productController: ProductController
  ) {
    this.router.get("/products/:id", productController.index_by_store_id);
    this.router.post(
      "/product",
      this.authVerify.getUserByJwtToken,
      productController.create
    );
    this.router.get("/product/:id", productController.show);

    //Buscar Produtos para listagem do dono da loja
    this.router.get(
      "/products",
      this.authVerify.getUserByJwtToken,
      productController.index_by_token
    );
    // this.router.put("/user/:id", userController.updateUser);
    // this.router.delete("/user/:id", userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
