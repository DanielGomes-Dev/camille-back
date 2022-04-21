import express from "express";
import cors from "cors";
import env from "dotenv-safe";
import UserBuyerRoutes from "./routes/UserBuyerRoutes";
import StoreRouter from "./routes/StoreRoutes";
// import StoreProductCategoryRouter from "./routes/StoreProductCategoryRoutes";

import UserBuyerController from "./controllers/UserBuyerController";
import StoreController from "./controllers/StoreController";
// import StoreProductCategoryController from "./controllers/StoreProductCategoryController";
import ProductsRouter from "./routes/ProductsRoutes";
import ProductController from "./controllers/ProductConttroller";
import RequestRouter from "./routes/RequestRoute";
import RequestController from "./controllers/RequestController";
import UserSellerRoutes from "./routes/UserSellerRoutes";
import CheckoutTransparentMercadoPago from "./routes/CheckoutTransparentMercadoPago";
import UserSellerController from "./controllers/UserSellerController";
import StoreCategoryRouter from "./routes/StoreCategoryRoutes";
import StoreCategoryController from "./controllers/StoreCategoryController";
import ProductsFoodRouter from "./routes/ProductsFoodRoutes";
import ProductFoodConttroller from "./controllers/ProductFoodConttroller";
import ProductCategoryRouter from "./routes/ProductCategoryRoutes";
import ProductCategoryController from "./controllers/ProductCategoryController";
import TypeProductRouter from "./routes/TypeProductRoutes";
import TypeProductController from "./controllers/TypeProductController";
import ProductColorController from "./controllers/ProductColorController";
import ProductToCategoryController from "./controllers/ProductToCategoryController";
import CheckoutTransparentMercadoPagoController from "./controllers/CheckoutTransparentMercadoPagoController";
import UserDeliverRoutes from "./routes/UserDeliverRoutes";
import UserDeliverController from "./controllers/UserDeliverController";
import NotesRouter from "./routes/NotesRoutes";
import NotesController from "./controllers/NotesController";
import TypePlusController from "./controllers/TypePlusController";
import TypePlusRouter from "./routes/TypePlusRoutes";
import ProductSizeController from "./controllers/ProductSizeController copy";

class Server {
  private app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  public routes(): void {
    new UserBuyerRoutes(this.app, new UserBuyerController());
    new UserSellerRoutes(this.app, new UserSellerController());
    new UserDeliverRoutes(this.app, new UserDeliverController());

    new CheckoutTransparentMercadoPago(
      this.app,
      new CheckoutTransparentMercadoPagoController()
    );
    new StoreRouter(this.app, new StoreController());
    new StoreRouter(this.app, new StoreController());

    // new StoreProductCategoryRouter(
    //   this.app,
    //   new StoreProductCategoryController()
    // );
    new ProductsRouter(
      this.app,
      new ProductController(),
      new ProductColorController(),
      new ProductSizeController(),
      new ProductToCategoryController()
    );
    new RequestRouter(this.app, new RequestController());
    new StoreCategoryRouter(this.app, new StoreCategoryController());
    new ProductsFoodRouter(this.app, new ProductFoodConttroller());
    new ProductCategoryRouter(this.app, new ProductCategoryController());
    new TypeProductRouter(this.app, new TypeProductController());
    new TypePlusRouter(this.app, new TypePlusController());

    new NotesRouter(this.app, new NotesController());
  }

  public start(): void {
    const port = env.config().parsed?.PORT;
    this.app.listen(process.env.PORT || port || 3333, () => {
      console.log("Server is listenning on port", port);
    });
  }
}

export default Server;
