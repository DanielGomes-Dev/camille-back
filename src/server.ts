import express from "express";
import cors from "cors";
import env from "dotenv-safe";
import UserBuyerRoutes from "./routes/UserBuyerRoutes";
import StoreRouter from "./routes/StoreRoutes";
import StoreProductCategoryRouter from "./routes/StoreProductCategoryRoutes";

import UserBuyerController from "./controllers/UserBuyerController";
import StoreController from "./controllers/StoreController";
import StoreProductCategoryController from "./controllers/StoreProductCategoryController";
import ProductsRouter from "./routes/ProductsRoutes";
import ProductController from "./controllers/ProductConttroller";
import RequestRouter from "./routes/RequestRoute";
import RequestController from "./controllers/RequestController";
import UserSellerRoutes from "./routes/UserSellerRoutes";
import UserSellerController from "./controllers/UserSellerController";
import StoreCategoryRouter from "./routes/StoreCategoryRoutes";
import StoreCategoryController from "./controllers/StoreCategoryController";
import ProductsFoodRouter from "./routes/ProductsFoodRoutes";
import ProductFoodConttroller from "./controllers/ProductFoodConttroller";

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
    new StoreRouter(this.app, new StoreController());
    new StoreRouter(this.app, new StoreController());
    new StoreProductCategoryRouter(
      this.app,
      new StoreProductCategoryController()
    );
    new ProductsRouter(this.app, new ProductController());
    new RequestRouter(this.app, new RequestController());
    new StoreCategoryRouter(this.app, new StoreCategoryController());
    new ProductsFoodRouter(this.app, new ProductFoodConttroller());
  }

  public start(): void {
    const port = env.config().parsed?.PORT;
    this.app.listen(process.env.PORT || port || 3333, () => {
      console.log("Server is listenning on port", port);
    });
  }
}

export default Server;
