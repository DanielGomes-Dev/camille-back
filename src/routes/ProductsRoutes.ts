import { Router } from "express";
import ProductColorController from "../controllers/ProductColorController";
import ProductController from "../controllers/ProductConttroller";
import ProductSizeController from "../controllers/ProductSizeController copy";
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
    private productSizeController: ProductSizeController,

    private productToCategoryController: ProductToCategoryController
  ) {
    this.router.get("/products/:id", productController.index_by_store_id);
    this.router.post(
      "/product",
      this.authVerify.getUserSellerByJwtToken,
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
      this.authVerify.getUserSellerByJwtToken,
      productController.index_by_token
    );
    this.router.put(
      "/product",
      this.authVerify.getUserSellerByJwtToken,
      uploadAzure.single("photo"),
      productController.edit
    );

    this.router.put(
      "/productcolor",
      this.authVerify.getUserSellerByJwtToken,
      productColorController.edit
    );

    this.router.put(
      "/productsize",
      this.authVerify.getUserSellerByJwtToken,
      productSizeController.edit
    );

    this.router.delete(
      "/product/:id",
      this.authVerify.getUserSellerByJwtToken,
      productController.delete
    );

    this.router.delete(
      "/productcolor/:id",
      this.authVerify.getUserSellerByJwtToken,
      productColorController.delete
    );

    this.router.delete(
      "/productsize/:id",
      this.authVerify.getUserSellerByJwtToken,
      productSizeController.delete
    );

    this.router.delete(
      "/productcategory/:productId/:categoryId",
      this.authVerify.getUserSellerByJwtToken,
      productToCategoryController.delete
    );
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
