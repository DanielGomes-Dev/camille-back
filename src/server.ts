import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import compression from "compression";
import cors from "cors";

// require("dotenv-safe").config();
import env from "dotenv-safe";
import UserRouter from "./routes/UserRoutes";
import StoreRouter from "./routes/StoreRoutes";
import StoreProductCategoryRouter from "./routes/StoreProductCategoryRoutes";

import UserController from "./controllers/UserController";
import StoreController from "./controllers/StoreController";
import StoreProductCategoryController from "./controllers/StoreProductCategoryController";
import ProductsRouter from "./routes/ProductsRoutes";
import ProductController from "./controllers/ProductConttroller";

// const configsDatabse = require("./database/config/DatabaseConfig");

// import DatabaseConfig from "./database/config/DatabaseConfig";

// import routes
// import indexRoutes from "./routes/indexRoutes";
// import PostRouter from "./routes/PostRoutes";
// import UserRoutes from "./routes/UserRoutes";

// Server Class
class Server {
  private app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    // Settings
    // this.app.set("port", process.env.PORT || 3333);
    // middlewares
    // this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    // this.app.use(helmet());
    // this.app.use(compression());
    this.app.use(cors());
  }

  public routes(): void {
    new UserRouter(this.app, new UserController());
    new StoreRouter(this.app, new StoreController());
    new StoreRouter(this.app, new StoreController());
    new StoreProductCategoryRouter(
      this.app,
      new StoreProductCategoryController()
    );
    new ProductsRouter(this.app, new ProductController());

    // const router: express.Router = express.Router();
    // this.app.use("/", indexRoutes);
    // this.app.use("/api/posts", PostRouter);
    // this.app.use("/api/users", UserRoutes);
  }

  public start(): void {
    const port = env.config().parsed?.PORT;
    this.app.listen(process.env.PORT || port || 3333, () => {
      console.log("Server is listenning on port", port);
    });
  }
}

export default Server;
