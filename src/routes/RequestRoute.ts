import { Router } from "express";
import ControllerInterface from "../interfaces/Project/ControllerInterface";
import authVerify from "../middleware/authVerify";

// import User from "../models/User";

export default class RequestRouter {
  authVerify = new authVerify();
  constructor(
    private router: Router,
    private requestController: ControllerInterface
  ) {
    this.router.get(
      "/request",
      this.authVerify.getUserByJwtToken,
      this.requestController.index
    );
    this.router.get(
      "/request/:id",
      this.authVerify.getUserByJwtToken,
      this.requestController.show
    );
    this.router.post(
      "/request",
      this.authVerify.getUserByJwtToken,
      this.requestController.create
    );
    // this.router.put("/user/:id", this.userController.updateUser);
    // this.router.delete("/user/:id", this.userController.deleteUser);
  }
}
