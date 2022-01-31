import { Router } from "express";
import ProductFoodConttroller from "../controllers/ProductFoodConttroller";
import authVerify from "../middleware/authVerify";
import uploadAzure from "../uploadAzure";

// import User from "../models/User";

export default class ProductsFoodRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private productFoodConttroller: ProductFoodConttroller
  ) {
    this.router.get(
      "/productsfood/:id",
      this.productFoodConttroller.index_by_store_id
    );

    this.router.get(
      "/productfoodplus/:productId",
      this.productFoodConttroller.index_complements_by_product_id
    );

    this.router.post(
      "/productfood",
      this.authVerify.getUserByJwtToken,
      uploadAzure.single("photo"),
      this.productFoodConttroller.create
    );

    // // Cadastrar Imagens
    // this.router.post(
    //   "/product/img",
    //   this.authVerify.getUserByJwtToken,
    //   uploadAzure.single("photo"),
    //   productController.createImg
    // );

    this.router.get("/productfood/:id", this.productFoodConttroller.show);

    //Buscar Produtos para listagem do dono da loja
    this.router.get(
      "/productsfood",
      this.authVerify.getUserByJwtToken,
      this.productFoodConttroller.index_by_token
    );
    this.router.put(
      "/productsfood",
      this.authVerify.getUserByJwtToken,
      uploadAzure.single("photo"),
      this.productFoodConttroller.edit
    );
    this.router.delete(
      "/productsfood/:id",
      this.authVerify.getUserByJwtToken,
      this.productFoodConttroller.delete
    );

    this.router.delete(
      "/productsfoodplus/:id",
      this.authVerify.getUserByJwtToken,
      this.productFoodConttroller.delete_complement_by_id
    );
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
