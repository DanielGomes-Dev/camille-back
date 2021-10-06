import { Router } from "express";
import UserController from "../controllers/UserController";

// import User from "../models/User";

export default class UserRouter {
  constructor(private userController: UserController, private router: Router) {
    this.router.get("/user", this.userController.index);
    this.router.post("/user", this.userController.store);
    // this.router.get("/user/:id", this.userController.getUser);
    // this.router.put("/user/:id", this.userController.updateUser);
    // this.router.delete("/user/:id", this.userController.deleteUser);
  }
}

// const userRouter = new UserRouter();
// export default userRouter.router;
