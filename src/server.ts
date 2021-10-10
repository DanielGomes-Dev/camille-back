import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import compression from "compression";
import cors from "cors";

import UserRouter from "./routes/UserRoutes";

// require("dotenv-safe").config();
import env from "dotenv-safe";

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
    new UserRouter(this.app);
    // const router: express.Router = express.Router();
    // this.app.use("/", indexRoutes);
    // this.app.use("/api/posts", PostRouter);
    // this.app.use("/api/users", UserRoutes);
  }

  public start(): void {
    const port = env.config().parsed?.PORT || 3333;
    this.app.listen(port, () => {
      console.log("Server is listenning on port", port);
    });
  }
}

export default Server;
