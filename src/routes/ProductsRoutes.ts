import { Router } from "express";
import ProductColorController from "../controllers/ProductColorController";
import ProductController from "../controllers/ProductConttroller";
import ProductToCategoryController from "../controllers/ProductToCategoryController";
import authVerify from "../middleware/authVerify";
import uploadAzure from "../uploadAzure";

// import User from "../models/User";

export default class ProductsRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private productController: ProductController,
    private productColorController: ProductColorController,
    private productToCategoryController: ProductToCategoryController
  ) {
    this.router.get("/products/:id", productController.index_by_store_id);
    this.router.post(
      "/product",
      this.authVerify.getUserByJwtToken,
      uploadAzure.single("photo"),
      productController.create
    );

    // Cadastrar Imagens
    // this.router.post(
    //   "/product/img",
    //   this.authVerify.getUserByJwtToken,
    //   uploadAzure.single("photo"),
    //   productController.createImg
    // );

    this.router.get("/product/:id", productController.show);

    //Buscar Produtos para listagem do dono da loja
    this.router.get(
      "/products",
      this.authVerify.getUserByJwtToken,
      productController.index_by_token
    );
    this.router.put(
      "/product",
      this.authVerify.getUserByJwtToken,
      uploadAzure.single("photo"),
      productController.edit
    );

    this.router.put(
      "/productcolor",
      this.authVerify.getUserByJwtToken,
      productColorController.edit
    );

    this.router.delete(
      "/product/:id",
      this.authVerify.getUserByJwtToken,
      productController.delete
    );

    this.router.delete(
      "/productcolor/:id",
      this.authVerify.getUserByJwtToken,
      productColorController.delete
    );

    this.router.delete(
      "/productcategory/:productId/:categoryId",
      this.authVerify.getUserByJwtToken,
      productToCategoryController.delete
    );
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
