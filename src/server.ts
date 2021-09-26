import express from "express";
// import morgan from "morgan";
// import helmet from "helmet";
// import compression from "compression";
import cors from "cors";

import UserRouter from "./routes/UserRoutes";
import UserController from "./controllers/UserController";

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
    this.app.set("port", process.env.PORT || 3333);
    // middlewares
    // this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    // this.app.use(helmet());
    // this.app.use(compression());
    this.app.use(cors());
  }

  public routes(): void {
    new UserRouter(new UserController(), this.app);
    // const router: express.Router = express.Router();
    // this.app.use("/", indexRoutes);
    // this.app.use("/api/posts", PostRouter);
    // this.app.use("/api/users", UserRoutes);
  }

  public start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server is listenning on port", this.app.get("port"));
    });
  }
}

export default Server;
